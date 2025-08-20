# LanteaCorp Website

Static Astro site built with Tailwind, React islands, Framer Motion and optional Three.js starfield.

## Prerequisites
- Node.js LTS

## Commands
```bash
npm install
npm run dev
npm run build
```

`dist` contains static output for upload to cPanel hosting.

## Deploy
Upload `dist` contents to `public_html` on the server.

Optional cache headers:
```apache
# <IfModule mod_headers.c>
#   <FilesMatch "\.(js|css|png|jpg|svg|webp)$">
#     Header set Cache-Control "public, max-age=31536000"
#   </FilesMatch>
# </IfModule>
```
