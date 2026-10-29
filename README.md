# KATSEYE Fan Universe

An unofficial, fan-made KATSEYE PWA. This project is not affiliated with KATSEYE, HYBE, Geffen Records or their management. It uses no backend, framework, build tools, API keys or paid services. Member photos and album art load from their official source hosts; tour dates load through the public Seated widget used on KATSEYE’s official tour page. Those features need an internet connection.

## Run locally on Windows

1. Open this folder in File Explorer.
2. Double-click `index.html` to view the site in your default browser.
3. Open `index.html`, `styles.css` and `app.js` in a text editor to make changes, then refresh the browser.

PWA install and service-worker features need HTTPS (or localhost). The local page itself still opens directly. Cached page structure can open offline after a first visit; member photos, album art, YouTube, Google Fonts and the current tour feed need internet.

## Features

- Responsive magazine-style home, journey timeline, member cards, albums, favourites, tour schedule and official social links.
- Six-member home slideshow with previous/next, pause and reduced-motion behavior.
- Favourites saved in this browser under `katseye-fan-universe-favourites-v1`.
- Per-track official YouTube links when found; no lyrics are included.
- Current tour event widget from the official public Seated feed. It refreshes when the page loads; the official schedule link remains available as a fallback.
- Installable PWA manifest, home-screen icons, and service worker for caching the app shell.

## Edit and extend

- Change layout and visual styles in `styles.css`.
- Edit page sections and navigation in `index.html`.
- Edit member records, album tracks, favourite behavior and interactions in `app.js`.
- The Seated artist widget ID is in the Tour section of `index.html`; if KATSEYE changes providers or IDs, update it from their official tour page.
- After changing app-shell files, increase `CACHE_NAME` in `sw.js` so installed copies fetch the new version.
- Keep factual details sourced and attributed. Do not add lyrics or unlicensed photos.

## Install and host for phone use

This is an installable Progressive Web App (PWA), not a native APK. GitHub Pages is a no-cost static host option. GitHub Free requires a public repository for Pages, so the source files will be public too. Create a GitHub repository, upload these site files to its root, then enable Pages for the `main` branch and `/ (root)` in Settings → Pages. The site URL will look like `https://<account>.github.io/<repository>/`.

On Android, open the HTTPS site in Chrome and choose the browser menu → Install app (or Add to Home screen). On iPhone, open it in Safari and choose Share → Add to Home Screen.

## Limits

Tour dates are supplied by a third-party official event widget; they are not copied into this app. The widget needs internet and may change. Confirm dates, venue details and ticket availability at the official schedule before travelling. Favourites remain local to one browser/device. Social channels open externally and are not embedded.

