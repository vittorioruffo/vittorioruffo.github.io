# Hero Images Setup Guide 🏔️

Your site now supports beautiful hero banner sections with your personal mountain photography!

## ✅ What's Been Set Up

1. **Hero section styles** with gradient overlays (non-distracting)
2. **Responsive design** that looks great on all devices
3. **Easy-to-use system** via page front matter
4. **Example implementation** on your teaching page

## 🚀 How to Add Hero Images

### Step 1: Prepare Your Photos

1. Choose your best mountain/landscape photos
2. Optimize them for web:
   - **Recommended size**: 1920x1080px (or similar 16:9 ratio)
   - **File format**: JPG
   - **File size**: Aim for 200-500KB (compress if needed)
3. Save them with descriptive names like:
   - `teaching-mountain.jpg`
   - `publications-alps.jpg`
   - `about-sunset-peak.jpg`

### Step 2: Add Photos to Your Site

Place your photos in: `assets/img/hero/`

### Step 3: Enable Hero on Any Page

Edit the front matter of any page (e.g., `_pages/teaching.md`):

```yaml
---
layout: page
title: teaching
description: Inspiring the next generation of finance professionals  # Optional subtitle
hero_image: /assets/img/hero/teaching-mountain.jpg
nav: true
nav_order: 4
---
```

**That's it!** The hero section will automatically appear.

## 📄 Suggested Pages for Heroes

Here are pages that would look great with hero images:

### Already Set Up:
- ✅ **teaching.md** - Ready! Just add your photo

### Great Candidates:
- **about.md** - Personal photo or favorite mountain view
- **publications.md** - Academic/research-themed landscape
- **projects.md** - Inspirational mountain or nature scene
- **cv.md** - Professional landscape shot

## 🎨 Design Features

### What Makes It Non-Distracting:

1. **Dark gradient overlay** (30-70% opacity)
   - Makes text always readable
   - Reduces photo brightness
   - Creates depth

2. **Contained to top of page**
   - Only 400px tall (300px on mobile)
   - Content below remains clean and white
   - Clear visual separation

3. **Text overlay**
   - Page title appears on the photo
   - Optional description/subtitle
   - Proper shadows for readability

4. **Responsive design**
   - Desktop: 400px height
   - Tablet: 300px height
   - Mobile: 250px height
   - Text sizes adjust automatically

## 🔧 Customization Options

### Change Hero Height

Edit `_sass/_layout.scss` line 27:

```scss
.hero-section {
  height: 400px;  // Change this value
  // ...
}
```

### Adjust Overlay Darkness

Edit `_sass/_layout.scss` lines 53-59:

```scss
background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.3) 0%,    // Top: 30% dark (lightest)
  rgba(0, 0, 0, 0.5) 50%,   // Middle: 50% dark
  rgba(0, 0, 0, 0.7) 100%   // Bottom: 70% dark (darkest)
);
```

Increase the numbers (0.0-1.0) to make it darker, decrease to make it lighter.

### Remove Description

Simply don't include `description:` in your front matter, or leave it blank.

## 📸 Photography Tips

For best results with your mountain photos:

1. **Composition**: Keep horizons in the middle third
2. **Lighting**: Photos with dramatic skies work great
3. **Avoid**: Very bright snow-only scenes (can be glaring)
4. **Test**: View your page in both light and dark mode
5. **Simplicity**: Less busy backgrounds work better with text overlay

## 🔄 Removing Hero from a Page

Just delete or comment out the `hero_image` line:

```yaml
---
layout: page
title: teaching
# hero_image: /assets/img/hero/teaching-mountain.jpg
---
```

The page will return to the standard title/description header.

## 🌐 Example: Full Front Matter

```yaml
---
layout: page
permalink: /teaching/
title: teaching
description: Inspiring the next generation of finance professionals
nav: true
nav_order: 4
hero_image: /assets/img/hero/teaching-mountain.jpg
---
```

## 🎯 Next Steps

1. **Choose your best photos** - Select 3-5 mountain shots
2. **Optimize them** - Resize and compress for web
3. **Upload to** `assets/img/hero/`
4. **Update page front matter** - Add `hero_image` and `description`
5. **Test locally** - Run `bundle exec jekyll serve` and check how they look
6. **Adjust if needed** - Fine-tune overlay darkness or descriptions

Enjoy your beautiful, personal touch to the site! 🏔️✨
