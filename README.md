# Zemran Dawit — Architect Portfolio

Dark-themed, single-page portfolio for **Zemran Dawit**: architecture, interior design, landscape, product and 3D visualisation work, plus skills, experience, certificates and contact details.

Pure HTML, CSS and vanilla JavaScript. No build step, no dependencies (only the Instrument Sans font from Google Fonts).

## Features

- Tabbed project gallery: Architecture, Interior, Landscape, Product, Sketch & workflow
- Swipeable image rails with arrow controls and scroll progress bars
- Full-screen lightbox with keyboard (← → Esc), touch-swipe and tap-to-zoom
- Animated skill ratings, scroll-reveal effects (respects `prefers-reduced-motion`)
- Responsive layout with iOS safe-area support
- Accessible markup (ARIA roles, focus styles, alt text and captions)

## Project structure

No nested folders. Image folders hold at most 100 files each, so they are numbered.

```
.
├── index.html            # Page markup
├── css/                  # style.css (all styles)
├── js/                   # data.js (content, edit here) and main.js (behaviour)
├── image1/               # Images 1-100 (certificates + first projects)
└── image2/               # Remaining images (start image3/ after 100 files)
```

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Create a new repository and push these files to the `main` branch.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

```bash
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Editing content

- **Add or edit a project:** open `js/data.js`, find the discipline (`arch`, `int`, `land`, `prod`, `sk`) in the `D` object and add an entry with a title (`t`), label (`k`), description (`d`), tags (`g`, separated by ` · `) and images (`i`: `[imageKey, caption]`).
- **Add an image:** drop the JPG into the newest image folder (create `image3/` once `image2/` reaches 100 files) and add `"yourKey": "image2/yourKey.jpg"` to the `I` map at the top of `data.js`.
- **Change skills:** edit the `S` array in `data.js`.
- **Text, experience, contact links:** edit `index.html`.
- **Colours:** change the CSS variables at the top of `css/style.css`.

## Contact

zemrand.kin@gmail.com

© 2026 Zemran Dawit. All rights reserved. Project images and certificates are the property of their respective owners and are not licensed for reuse.
