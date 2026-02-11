# Social Share Image (og-image.png) Guide

## Overview
You need to create a social share image (og-image.png) that will be displayed when your website is shared on social media platforms like Facebook, LinkedIn, and Twitter/X.

## Specifications

### Dimensions
- **Recommended size:** 1200 x 630 pixels
- **Aspect ratio:** 1.91:1 (Facebook/LinkedIn standard)
- **Format:** PNG or JPG
- **File size:** Under 1MB (preferably under 300KB)

### Content Guidelines

Your og-image should include:
1. **Your logo** - Harborline Digital logo or "HD" monogram
2. **Tagline or value proposition** - e.g., "Coastal Web Design & Development"
3. **Brand colors** - Navy (#0F2742), Seafoam (#8ECAC1), Sand (#F5F1E8)
4. **Clean, professional design** - Not too text-heavy

### Example Layout

```
┌─────────────────────────────────────────┐
│                                         │
│           [HD LOGO]                     │
│                                         │
│      Harborline Digital                 │
│                                         │
│   Coastal Web Design &                  │
│      Development                        │
│                                         │
│  Clean, modern websites with            │
│      a coastal calm                     │
│                                         │
└─────────────────────────────────────────┘
```

## Design Tools

You can create this image using:

### Free Tools
- **Canva** - https://www.canva.com/
  - Use "Facebook Post" template (1200x630)
  - Upload your logo and customize colors

- **Figma** - https://www.figma.com/
  - Create a 1200x630 frame
  - Design from scratch with full control

### Paid Design Services
- **Fiverr** - Starting at $5-20
- **99designs** - Professional designers
- **Dribbble** - Hire designers from portfolio

## File Location
Once created, save the file as:
```
/public/og-image.png
```

The SEO component is already configured to use this file at:
```
https://harborlinedigital.com/og-image.png
```

## Testing Your Image

After adding the image, test how it looks when shared:

1. **Facebook Sharing Debugger**
   - https://developers.facebook.com/tools/debug/
   - Enter your URL and click "Scrape Again"

2. **Twitter Card Validator**
   - https://cards-dev.twitter.com/validator
   - Enter your URL to preview

3. **LinkedIn Post Inspector**
   - https://www.linkedin.com/post-inspector/
   - Enter your URL to see preview

## Alternative: Use Existing Brand Assets

If you have existing brand assets (business cards, letterhead, website header), you can:
1. Export a high-res version at 1200x630
2. Ensure text is large enough to read when scaled down
3. Keep important elements centered (edges may be cropped on some platforms)

## Quick Canva Template

1. Go to https://www.canva.com/
2. Search for "Facebook Post" or "OG Image"
3. Use these settings:
   - Background: Sand (#F5F1E8) or gradient from Seafoam to Sand
   - Text: Navy (#0F2742)
   - Add your logo
   - Add tagline: "Coastal Web Design & Development"
4. Download as PNG
5. Rename to `og-image.png`
6. Place in `/public/` folder

## Need Help?

If you need assistance creating this image, you can:
- Use ChatGPT/Claude to generate design ideas
- Hire a designer on Fiverr for $10-20
- Use Canva's AI image generator with your brand guidelines
