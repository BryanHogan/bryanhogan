import { resolve } from "node:path";
import sharp from "sharp";
import theme from "../styles/var.css?raw";

const width = 1200;
const height = 630;
const textPanelWidth = 792;
const padding = 64;
const textWidth = textPanelWidth - 2 * padding;
const artworkSize = 280;
const portraitSize = 120;
const verticalPadding = 48;
const portraitTop = height - verticalPadding - portraitSize;
const accentGap = 20;
const accentHeight = 5;
const titleHeight = portraitTop - verticalPadding - accentGap - accentHeight - 24;
const portraitPath = resolve("src/assets/images/Bryan-Hogan.png");
const emojiFont = resolve("src/assets/fonts/noto-emoji/NotoEmoji.ttf");

function themeColor(name: string) {
    const match = theme.match(new RegExp(`--color-${name}:\\s*(#[a-f\\d]+);`, "i"));
    if (!match) throw new Error(`Missing preview color --color-${name}`);
    return match[1];
}

const foreground = themeColor("neutral-100");
const secondary = themeColor("neutral-200");
const accent = themeColor("accent-500");
const background = Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <defs>
            <linearGradient id="art" x2="100%" y2="100%">
                <stop stop-color="${themeColor("accent-lilac-500")}"/>
                <stop offset=".5" stop-color="${themeColor("accent-blue-500")}"/>
                <stop offset="1" stop-color="${themeColor("accent-cyan-500")}"/>
            </linearGradient>
        </defs>
        <rect width="${width}" height="${height}" fill="${themeColor("neutral-900")}"/>
        <rect x="${textPanelWidth}" width="${width - textPanelWidth}" height="${height}" fill="url(#art)"/>
    </svg>`);

function escapeText(text: string) {
    return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

async function renderTitle(title: string) {
    for (const size of [80, 72, 64, 56, 48, 40]) {
        const layer = await sharp({
            text: {
                text: `<span foreground="${foreground}">${escapeText(title)}</span>`,
                font: `Arial Bold ${size}`,
                width: textWidth,
                wrap: "word-char",
                rgba: true,
            },
        }).png().toBuffer({ resolveWithObject: true });
        if (layer.info.height <= titleHeight) return layer;
    }
    throw new Error(`Social preview title exceeds its panel: ${title}`);
}

type Artwork = { coverPath: string } | { emoji: string };

function renderArtwork(artwork: Artwork) {
    const image = "coverPath" in artwork
        ? sharp(artwork.coverPath).autoOrient()
        : sharp({
            text: {
                // Keep emoji presentation selectors from picking an OS color font.
                text: `<span fallback="false" foreground="${foreground}">${escapeText(artwork.emoji)}</span>`,
                font: "Noto Emoji 280",
                fontfile: emojiFont,
                rgba: true,
            },
        });
    return image.resize(artworkSize, artworkSize, { fit: "inside" })
        .png().toBuffer({ resolveWithObject: true });
}

export async function generateSocialImage(title: string, artwork: Artwork) {
    const [headline, illustration, portrait, signature] = await Promise.all([
        renderTitle(title),
        renderArtwork(artwork),
        sharp(portraitPath).resize(portraitSize, portraitSize).png().toBuffer(),
        sharp({
            text: {
                text: `<span foreground="${secondary}">BryanHogan.com</span>`,
                font: "Arial 32",
                rgba: true,
            },
        }).png().toBuffer({ resolveWithObject: true }),
    ]);

    const titleTop = verticalPadding + Math.round((titleHeight - headline.info.height) / 2);

    return sharp(background).composite([
        { input: headline.data, left: padding, top: titleTop },
        {
            input: { create: { width: headline.info.width, height: accentHeight, channels: 4, background: accent } },
            left: padding,
            top: titleTop + headline.info.height + accentGap,
        },
        { input: portrait, left: padding, top: portraitTop },
        {
            input: signature.data,
            left: padding + portraitSize + 24,
            top: portraitTop + Math.round((portraitSize - signature.info.height) / 2),
        },
        {
            input: illustration.data,
            left: textPanelWidth + Math.round((width - textPanelWidth - illustration.info.width) / 2),
            top: Math.round((height - illustration.info.height) / 2),
        },
    ]).png().toBuffer();
}
