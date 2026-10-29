# KATSEYE Fan Universe

An unofficial, fan-made KATSEYE PWA. This project is not affiliated with KATSEYE, HYBE, Geffen Records or their management. It uses no backend, framework, build tools, API keys or paid services. Member photos and album art load from their official source hosts. The tour list is a read-only snapshot that is updated manually.

## Run locally on Windows

1. Open this folder in File Explorer.
2. Double-click `index.html` to view the site in your default browser.
3. Open `index.html`, `styles.css` and `app.js` in a text editor to make changes, then refresh the browser.

PWA install and service-worker features need HTTPS (or localhost). The local page itself still opens directly. Cached page structure can open offline after a first visit; member photos, album art, YouTube, Google Fonts and the current tour feed need internet.

## Features

- Responsive magazine-style home, journey timeline, interactive member profiles, albums, favourites, read-only tour schedule and official social links.
- Click a member poster to open a profile with her official KATSEYE charm and a sourced fun fact.
- Six-member home slideshow with previous/next, pause and reduced-motion behavior.
- Favourites saved in this browser under `katseye-fan-universe-favourites-v1`.
- Per-track official YouTube links when found; no lyrics are included.
- Fan-curated tour schedule snapshot with no ticket purchase or shopping links. It is not live and must be manually checked and updated.
- Installable PWA manifest, home-screen icons, and service worker for caching the app shell.

## Edit and extend

- Change layout and visual styles in `styles.css`.
- Edit page sections and navigation in `index.html`.
- Edit member records, album tracks, favourite behavior and interactions in `app.js`.
- Member charm names are from KATSEYE's official charms page; short background facts link to Netflix Tudum's 2025 guide. Recheck sources before editing these details.
- Tour dates in `app.js` are a read-only snapshot checked 30 October 2026. Manually update the date stamp and entries when verifying the official schedule; do not add ticket or shop URLs.
- After changing app-shell files, increase `CACHE_NAME` in `sw.js` so installed copies fetch the new version.
- Keep factual details sourced and attributed. Do not add lyrics or unlicensed photos.

## Install and host for phone use

This is an installable Progressive Web App (PWA), not a native APK. It is hosted on GitHub Pages at <https://voodooman666.github.io/katseye-fan-universe/>. Its source is public in <https://github.com/voodooman666/katseye-fan-universe> because GitHub Free Pages requires a public repository. Later updates can be published by committing changed files to the `main` branch.

On Android, open the HTTPS site in Chrome and choose the browser menu → Install app (or Add to Home screen). On iPhone, open it in Safari and choose Share → Add to Home Screen.

## Limits

Tour dates are a fan-curated snapshot and may become outdated. There are no ticket checkout or shopping links. Favourites remain local to one browser/device. Social channels open externally and are not embedded.

