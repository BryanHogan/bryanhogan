# Dark Mode Feature Outline

## Overview
Add a toggle for dark/light theme across the site.

## Goals
- Allow users to switch between dark and light modes.
- Persist user preference (localStorage).
- Ensure all components and pages are styled for both modes.

## Implementation Steps
1. Add CSS variables for colors in `var.css`.
2. Create a `ThemeToggle.astro` component.
3. Implement logic to switch CSS classes or variables.
4. Store user preference in localStorage.
5. Update global and component styles for dark mode compatibility.
6. Test accessibility and contrast in both modes.

## Key Findings & Implementation Details

### 1. CSS Variables Structure
- **Default Theme**: Set dark theme as default in `:root`
- **Light Theme Override**: Use `[data-theme="light"]` selector to override variables
- **Color Scheme**: Add `color-scheme: dark/light` for browser integration
- **Explicit Dark Theme**: Add `[data-theme="dark"]` for consistency

```css
:root {
    color-scheme: dark;
    /* Dark theme variables as default */
}

[data-theme="dark"] {
    color-scheme: dark;
}

[data-theme="light"] {
    color-scheme: light;
    /* Override all color variables for light theme */
}
```

### 2. Theme Toggle Component (`ThemeToggle.astro`)
- **Global Functions**: Use `window.themeToggle` object to prevent conflicts
- **Initialization Tracking**: Use `data-theme-initialized` attribute to prevent duplicate listeners
- **Theme Storage**: Store preference in `localStorage`
- **DOM Attribute**: Use `data-theme` attribute on `<html>` element

### 3. Astro View Transitions Compatibility
**Critical for Astro projects with view transitions enabled:**

#### BaseLayout.astro Script (in `<head>`):
```javascript
// Theme initialization before body renders
if (!document.documentElement.hasAttribute('data-theme')) {
    let theme = 'dark'; // default
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        theme = storedTheme;
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        theme = 'light';
    }
    document.documentElement.setAttribute('data-theme', theme);
}
```

#### View Transitions Persistence:
```javascript
document.addEventListener('astro:before-swap', (ev) => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme) {
        ev.newDocument.documentElement.setAttribute('data-theme', currentTheme);
    }
});
```

#### Component Event Listeners:
```javascript
// Re-initialize after view transitions
document.addEventListener('astro:page-load', () => window.themeToggle.init());
```

### 4. Critical Implementation Patterns

#### Theme Persistence Across Pages:
- **Global Script**: Run theme detection in `<head>` before body renders
- **View Transitions**: Use `astro:before-swap` to preserve theme state
- **Component Re-initialization**: Use `astro:page-load` to re-attach event listeners

#### Preventing Flash of Unstyled Content:
- Set theme immediately in `<head>` script
- Only initialize theme if `data-theme` doesn't exist
- Use `is:inline` scripts for immediate execution

#### Event Handler Management:
- Check for existing initialization to prevent duplicates
- Use global namespace (`window.themeToggle`) for consistency
- Remove/add listeners carefully during view transitions

### 5. Accessibility Considerations
- **Focus States**: Proper outline with theme-aware colors
- **Aria Labels**: Descriptive `aria-label` and `title` attributes
- **Color Contrast**: Ensure 4.5:1 ratio for text, 3:1 for UI elements
- **System Preference**: Respect `prefers-color-scheme` on first visit

### 6. Smooth Transitions
```css
body {
    transition: background-color 0.3s, color 0.3s;
}
```

### 7. Additional Enhancements
- **Meta Theme Color**: Consider updating `<meta name="theme-color">` dynamically
- **Icon Adaptation**: Use theme-aware icons (sun/moon emojis or SVGs)
- **Image Consideration**: Review if any images need theme-specific versions

## Common Pitfalls & Solutions

### Problem: Theme resets on page navigation
**Solution**: Use `astro:before-swap` event to preserve theme state

### Problem: Flash of wrong theme
**Solution**: Run theme detection script in `<head>` before body renders

### Problem: Duplicate event listeners
**Solution**: Track initialization state and clean up existing listeners

### Problem: Theme not persisting
**Solution**: Ensure localStorage is being written on every theme change

## Testing Checklist
- [ ] Theme persists across page navigation
- [ ] System preference is respected on first visit
- [ ] No flash of unstyled content
- [ ] All components work in both themes
- [ ] Focus states are visible in both themes
- [ ] Color contrast meets accessibility standards
- [ ] Mobile navigation includes theme toggle
- [ ] Theme toggle works after view transitions

## File Structure
```
src/
├── components/
│   └── ThemeToggle.astro     # Theme toggle component
├── layouts/
│   └── BaseLayout.astro      # Global theme scripts
└── styles/
    ├── var.css               # Theme color variables
    └── global.css            # Transition styles
```
