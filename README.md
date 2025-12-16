# Deliverables🪕 A Photography Client Portal

A lightweight, static client portal designed for photographers to deliver images to clients professionally without the need for a backend, database, or authentication system.

## Features

- **Zero Dependencies**: Pure HTML, CSS, and JavaScript. No servers or databases required.
- **Dual Download Options**: Automatically generates download buttons for "Web Size" and "Print Size" for each image.
- **Dynamic Configuration**: Easily update client names, dates, and image lists via a simple `config.js` file.
- **Premium Design**: Responsive grid layout with a modern Light/Navy/Yellow aesthetic and hover effects.
- **Performance**: Lazy loading enabled for images to ensure fast load times.

## Directory Structure

To use this portal, your file structure should look like this:

```
/
├── index.html        # Main entry point
├── css/
│   └── style.css     # Styling
├── js/
│   ├── config.js     # Your settings (Edit this!)
│   └── script.js     # Logic
└── images/
    ├── logo.png      # Your brand logo
    ├── high-res/     # Place FULL resolution print-ready images here
    └── web-res/      # Place web-optimized (smaller) images here
```

> **Important**: The filenames in `high-res` and `web-res` must match exactly (e.g., `wedding_001.jpg` in both folders).

## How to Use

1. **Add Your Images**:
   - Save your print-ready files to `images/high-res/`.
   - Save your resized web files to `images/web-res/`.

2. **Update the Configuration**:
   Open `js/config.js` and update the details:

   ```javascript
   const galleryConfig = {
       clientName: "Smith & Jones Wedding",
       sessionDate: "December 15, 2025",
       images: [
           "wedding_001.jpg",
           "wedding_002.jpg",
           "wedding_003.jpg"
           // ...
       ]
   };
   ```

3. **Deploy**:
   - Since this is a static site, you can host it anywhere (GitHub Pages, Netlify, Vercel, or standard web hosting).
   - Alternatively, you can zip the entire folder and send it directly to a client for offline viewing.

## Customization

- **Colors**: Edit the CSS variables in `css/style.css` to match your branding.
- **Logo**: Replace `images/logo.png` with your own logo file.

## License

Free to use for personal or commercial photography business.
