# Media Assets Required for Sakhi Project Page

This document outlines all the media assets that need to be added to complete the Sakhi project page.

## Directory Structure
Create the following directory structure in your `public` folder:

```
public/
├── sakhi/
│   ├── team/
│   │   ├── meet-mehta.jpg
│   │   ├── mrunmayi-parker.jpg
│   │   ├── nahush-patil.jpg
│   │   └── pratyay-banerjee.jpg
│   ├── logos/
│   │   ├── mit.png
│   │   ├── unicef.png
│   │   ├── world-bank.png
│   │   └── brics.png
│   ├── sakhi_testimonial_trimmed (1).mp4 (already referenced)
│   ├── sakhi_main.png (already referenced)
│   └── demo-video.mp4
```

## Required Assets

### Team Photos
Located in `/public/sakhi/team/`
- **meet-mehta.jpg** - Square format, 400x400px recommended
- **mrunmayi-parker.jpg** - Square format, 400x400px recommended  
- **nahush-patil.jpg** - Square format, 400x400px recommended
- **pratyay-banerjee.jpg** - Square format, 400x400px recommended

*Note: These should be professional headshots with good lighting, preferably with consistent styling*

### Organization Logos
Located in `/public/sakhi/logos/`
- **mit.png** - MIT logo (transparent background preferred)
- **unicef.png** - UNICEF logo (transparent background preferred)
- **world-bank.png** - World Bank logo (transparent background preferred)
- **brics.png** - BRICS logo (transparent background preferred)

*Note: Ensure you have permission to use these logos and they meet brand guidelines*

### Videos
Located in `/public/sakhi/`
- **demo-video.mp4** - Vertical video (9:16 aspect ratio) showing WhatsApp chatbot demo
  - Recommended resolution: 720x1280px or 1080x1920px
  - Duration: 30-60 seconds
  - Should show the WhatsApp interface and key features

### Existing Assets
These are already referenced in the code:
- **sakhi_testimonial_trimmed (1).mp4** - Hero video (already exists)
- **sakhi_main.png** - Thumbnail image (already exists)

## Image Specifications

### Team Photos
- Format: JPG or PNG
- Size: 400x400px (square)
- File size: < 500KB each
- Quality: High resolution, professional lighting

### Logos
- Format: PNG (with transparency) or SVG
- Height: 48px (they will be scaled automatically)
- Background: Transparent preferred
- Style: Monochrome or original colors

### Demo Video
- Format: MP4
- Aspect Ratio: 9:16 (vertical/mobile format)
- Duration: 30-60 seconds
- Quality: 720p minimum, 1080p preferred
- Audio: Optional (will be muted by default)

## Usage Notes

1. All paths in the code are relative to the `public` directory
2. Images will be optimized automatically by Next.js
3. Videos should be compressed for web delivery
4. Consider adding alt text descriptions for accessibility
5. Test all media loads properly on different screen sizes

## Fallbacks

If specific assets are not available, the following placeholders are currently used:
- Team photos: Gray circular placeholders
- Logos: Will show as broken images (should be replaced)
- Demo video: Will show as gray rectangle if file missing

## To-Do Checklist

- [ ] Add all team member photos
- [ ] Add organization logos (with proper permissions)
- [ ] Create/add WhatsApp demo video
- [ ] Test all media assets load correctly
- [ ] Optimize file sizes for web performance
- [ ] Verify logos meet brand guidelines
- [ ] Test responsive behavior on mobile devices