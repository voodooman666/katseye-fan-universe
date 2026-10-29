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

## Android APK

The repository also contains a small Android WebView wrapper. GitHub Actions builds a sideloadable debug APK at no charge when Android wrapper files change or when the workflow is run manually. Open the repository's **Actions → Build Android APK** run and download the `katseye-fan-universe-android-apk` artifact. GitHub keeps that artifact for 30 days. Transfer the APK to the Android phone, open it, and approve Android's install-from-this-source prompt if shown.

The wrapper loads the hosted app, so it needs an internet connection. Favourites remain on that phone/browser's local storage. It blocks ticket and shopping URLs and opens only the app's approved official/social links outside the app. This is a debug-signed sideload build, not a Play Store release. Future builds from a fresh GitHub runner use a different debug signing key; to install a later build, uninstall the old app first (this also removes its local app data/favourites), then install the new APK.

The free PWA install remains available and is usually simpler: visit the site in Android Chrome and choose **Install app** from the browser menu.

## Limits

Tour dates are a fan-curated snapshot and may become outdated. There are no ticket checkout or shopping links. Favourites remain local to one browser/device. Social channels open externally and are not embedded.

