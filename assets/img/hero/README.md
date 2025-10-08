# Hero Images

This directory contains hero banner images for page headers.

## Usage

Add your mountain photos here and reference them in your page front matter:

```yaml
---
layout: page
title: Your Page Title
description: Optional subtitle
hero_image: /assets/img/hero/your-mountain-photo.jpg
---
```

## Recommended Specifications

- **Resolution**: 1920x1080px or higher (landscape orientation)
- **Aspect Ratio**: 16:9 or similar wide format
- **File Format**: JPG (optimized for web, ~200-500KB)
- **Subject**: Mountains, landscapes, nature scenes
- **Composition**: Keep important elements centered or in the middle third
  (text will overlay the center of the image)

## Image Optimization Tips

1. **Compress your images** before uploading to keep page load times fast
2. **Brightness**: Photos with some darker areas work best (the overlay adds darkness)
3. **Busy scenes**: The gradient overlay will help reduce distraction, but simpler compositions work better
4. **Test both light/dark themes** to ensure your photos look good in both

## Current Hero Images

- `teaching-mountain.jpg` - Teaching page (add your mountain photo here)

## Adding More Pages

You can add hero images to any page using the `page` layout:
- about.md
- publications.md
- projects.md
- cv.md
- etc.

Just add the `hero_image` front matter parameter and optionally a `description` for a subtitle.
