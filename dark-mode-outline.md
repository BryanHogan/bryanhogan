# Dark Mode Feature Outline

## Overview
Add a toggle for dark/light theme across the site.

## Goals
- Allow users to switch between dark and light modes.
- Persist user preference (localStorage).
- Ensure all components and pages are styled for both modes.

## Steps
1. Add CSS variables for colors in `var.css`.
2. Create a `ThemeToggle.astro` component.
3. Implement logic to switch CSS classes or variables.
4. Store user preference in localStorage.
5. Update global and component styles for dark mode compatibility.
6. Test accessibility and contrast in both modes.

## Considerations
- Respect system preference on first load.
- Provide smooth transitions between themes.
- Ensure images/icons adapt to theme if needed.
