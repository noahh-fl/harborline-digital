# Images Folder Structure

This folder contains all images organized by page/section.

## Folder Organization

- **home/** - Images for the home page (hero, services section, etc.)
- **work/** - Images for the work/portfolio page
- **services/** - Images for the services page
- **about/** - Images for the about page
- **contact/** - Images for the contact page

## How to Use

1. Add your images to the appropriate folder
2. Reference them in your components using: `/images/[folder-name]/[image-name.ext]`

### Example:
```tsx
<img src="/images/home/service-1.png" alt="Service 1" />
```

## Tips

- Use descriptive file names (e.g., `custom-websites-front.png`)
- Keep file sizes optimized for web (compress images before uploading)
- Supported formats: .jpg, .png, .svg, .webp

