# AI INTERIOR website

Static site: index.html, style.css, script.js. No build step, no dependencies.

## Publish on GitHub Pages (free)

1. Sign in at github.com. Open your repository `aiinterior115.github.io`
   (if it does not exist: New repository, name it exactly `aiinterior115.github.io`, Public).
2. Before replacing anything, look at the files already in the repo. If it has
   images or pages you want to keep, download them first.
3. Add file > Upload files. Drag in index.html, style.css, script.js
   (replace the existing index.html only after checking it).
4. Commit changes to the main branch.
5. Settings > Pages > Source: "Deploy from a branch", Branch: main, folder: / (root). Save.
6. After 1 to 3 minutes the site is live at https://aiinterior115.github.io/

## Fill in the placeholders

- Contact details: search index.html for text in [square brackets].
- WhatsApp: set WHATSAPP_NUMBER at the top of script.js (digits only, with country code).
- Photos: create an `images` folder and upload photos. In style.css change `.p1` to `.p6`
  to e.g. `background-image:url(images/living-room.jpg)`.
