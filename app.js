const members = [
  { id: "daniela", name: "Daniela", initial: "D", photo: "https://www.katseye.world/wp-content/uploads/sites/2863/2024/06/06.09.Daniela_slide1-sm-compressed.jpg", instagram: "https://www.instagram.com/daniela_avanzini/", note: "A member of KATSEYE’s six-person lineup.", glow: "rgba(241,151,192,.45)", shade: "#493047" },
  { id: "lara", name: "Lara", initial: "L", photo: "https://www.katseye.world/wp-content/uploads/sites/2863/2024/06/06.09.Lara_slide1-sm-compressed.jpg", instagram: "https://www.instagram.com/lararajj/", note: "A member of KATSEYE’s six-person lineup.", glow: "rgba(198,168,255,.42)", shade: "#39304e" },
  { id: "manon", name: "Manon", initial: "M", photo: "https://www.katseye.world/wp-content/uploads/sites/2863/2024/06/06.09.Manon_slide1-sm-compressed.jpg", instagram: "https://www.instagram.com/meretmanon/", note: "A member of KATSEYE’s six-person lineup.", glow: "rgba(234,175,208,.42)", shade: "#4a3046" },
  { id: "megan", name: "Megan", initial: "M", photo: "https://www.katseye.world/wp-content/uploads/sites/2863/2024/06/06.09.Megan_slide1-sm-compressed.jpg", instagram: "https://www.instagram.com/meganskiendiel/", note: "A member of KATSEYE’s six-person lineup.", glow: "rgba(199,180,255,.4)", shade: "#39334d" },
  { id: "sophia", name: "Sophia", initial: "S", photo: "https://www.katseye.world/wp-content/uploads/sites/2863/2024/06/06.09.Sophia_slide1-sm-compressed.jpg", instagram: "https://www.instagram.com/sophia_laforteza/", note: "A member of KATSEYE’s six-person lineup.", glow: "rgba(245,174,202,.4)", shade: "#4b303e" },
  { id: "yoonchae", name: "Yoonchae", initial: "Y", photo: "https://www.katseye.world/wp-content/uploads/sites/2863/2024/06/06.09.Yoonchae_slide1-sm-compressed.jpg", instagram: "https://www.instagram.com/y0on_cha3/", note: "A member of KATSEYE’s six-person lineup.", glow: "rgba(187,171,255,.4)", shade: "#37304a" }
];
const albums = [
  { title: "WILD", type: "Third EP · 2026", cover: "https://www.katseye.world/wp-content/uploads/sites/2863/2026/04/DSP_Standard_image-1000pox-compressed.jpg", tracks: [
    ["PINKY UP", "https://www.youtube.com/watch?v=7F1ET2XHQfk"], ["Animal", "https://www.youtube.com/watch?v=m7k9UMcHbr0"], ["Hootie Frutti", "https://www.youtube.com/watch?v=is8UDe2PhKQ"], ["Bel Air", ""], ["That Way", ""]
  ]},
  { title: "Beautiful Chaos", type: "Second EP · 2025", cover: "https://www.katseye.world/wp-content/uploads/sites/2863/2025/05/EP_Cover-Art-1000x1000-1-compressed.jpg", tracks: [
    ["Gnarly", "https://www.youtube.com/watch?v=R2-yomhYAj4"], ["Gabriela", "https://www.youtube.com/watch?v=CjnB56tSCQI"], ["Gameboy", "https://www.youtube.com/watch?v=-bC4iak3kxg"], ["Mean Girls", "https://www.youtube.com/watch?v=V9FyVxAyUa0"], ["M.I.A", "https://www.youtube.com/watch?v=YH6YPPE56RQ"]
  ]},
  { title: "SIS (Soft Is Strong)", type: "First EP · 2024", cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ae505d79ebf40fb207b6d4e0", tracks: [
    ["Debut", "https://www.youtube.com/watch?v=bYg6aMDQ_TA"], ["Touch", "https://www.youtube.com/watch?v=l9CZykYZkOQ"], ["My Way", "https://www.youtube.com/watch?v=1P8BbTY8gWo"], ["I’m Pretty", "https://www.youtube.com/watch?v=xQl4jd77bGY"], ["Tonight I Might", "https://www.youtube.com/watch?v=6oqywcXsQik"]
  ]}
];
const storageKey = "katseye-fan-universe-favourites-v1";
const readFavourites = () => {
  try { const saved = JSON.parse(localStorage.getItem(storageKey) || "[]"); return Array.isArray(saved) ? saved.filter(id => members.some(member => member.id === id)) : []; }
  catch { return []; }
};
let favourites = readFavourites();
const memberGrid = document.querySelector("#member-grid");
const albumGrid = document.querySelector("#album-grid");
const favouritesList = document.querySelector("#favourites-list");
const countLabel = document.querySelector(".nav-count");
const headingCount = document.querySelector("#favourite-heading-count");
function renderMembers() {
  memberGrid.innerHTML = members.map(member => {
    const selected = favourites.includes(member.id);
    return `<article class="member-card">
      <div class="member-portrait" style="--glow:${member.glow};--shade:${member.shade}">
        <img src="${member.photo}" alt="${member.name}" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false">
        <span class="member-initial" aria-hidden="true" hidden>${member.initial}</span>
      </div>
      <div class="member-info"><div class="member-top"><h3>${member.name}</h3>
        <button class="favourite-button" type="button" data-favourite="${member.id}" aria-pressed="${selected}" aria-label="${selected ? "Remove" : "Add"} ${member.name} ${selected ? "from" : "to"} favourites">${selected ? "♥" : "♡"}</button>
      </div><p>${member.note}</p></div>
    </article>`;
  }).join("");
}
function renderAlbums() {
  albumGrid.innerHTML = albums.map((album, index) => `<article class="album-card">
    <div class="album-cover"><img src="${album.cover}" alt="${album.title} EP cover" loading="lazy" onerror="this.hidden=true;this.parentElement.classList.add('cover-fallback')"><span aria-hidden="true">${index === 0 ? "W" : index === 1 ? "BC" : "SIS"}</span></div>
    <div class="album-meta"><span class="music-index">${album.type}</span><h3>${album.title}</h3></div>
    <ol class="track-list">${album.tracks.map(([title, url]) => `<li><span>${title}</span>${url ? `<a href="${url}" target="_blank" rel="noreferrer" aria-label="Watch ${title} on YouTube">↗<span class="sr-only"> Watch on YouTube</span></a>` : ""}</li>`).join("")}</ol>
  </article>`).join("");
}
function renderFavourites() {
  const chosen = members.filter(member => favourites.includes(member.id));
  countLabel.textContent = String(chosen.length);
  countLabel.setAttribute("aria-label", `${chosen.length} ${chosen.length === 1 ? "favourite" : "favourites"}`);
  headingCount.textContent = String(chosen.length);
  favouritesList.innerHTML = chosen.length ? chosen.map(member => `<div class="favourite-chip">
    <span class="mini-initial" aria-hidden="true">${member.initial}</span><strong>${member.name}</strong>
    ${member.instagram ? `<a class="member-social-link" href="${member.instagram}" target="_blank" rel="noreferrer" aria-label="${member.name} on Instagram">Instagram ↗</a>` : ""}
    <button class="remove-favourite" type="button" data-favourite="${member.id}" aria-label="Remove ${member.name} from favourites">Remove</button>
  </div>`).join("") : `<div class="empty-state"><strong>Your lineup starts here</strong>Choose the heart on a member card to add a favourite.</div>`;
}
function update() {
  try { localStorage.setItem(storageKey, JSON.stringify(favourites)); } catch { /* The current page remains usable if storage is unavailable. */ }
  renderMembers(); renderFavourites();
}
document.addEventListener("click", event => {
  const button = event.target.closest("[data-favourite]");
  if (!button) return;
  const id = button.dataset.favourite;
  favourites = favourites.includes(id) ? favourites.filter(item => item !== id) : [...favourites, id];
  update();
});
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  siteNav.classList.toggle("open", open);
});
siteNav.addEventListener("click", event => {
  if (event.target.closest("a")) { siteNav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); menuToggle.setAttribute("aria-label", "Open navigation"); }
});
renderMembers(); renderAlbums(); renderFavourites();

const heroSlides = [...document.querySelectorAll(".hero-slide")];
const slideStatus = document.querySelector("#hero-slide-status");
const slidePause = document.querySelector(".slide-pause");
let activeSlide = 0;
let slideshowPaused = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
let slideshowTimer;
function showSlide(index) {
  if (!heroSlides.length) return;
  activeSlide = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, i) => slide.classList.toggle("is-active", i === activeSlide));
  slideStatus.textContent = `${members[activeSlide].name} · ${activeSlide + 1} of ${heroSlides.length}`;
}
function stopSlideshow() { clearInterval(slideshowTimer); slideshowTimer = undefined; }
function startSlideshow() {
  stopSlideshow();
  if (!slideshowPaused && !document.hidden && heroSlides.length > 1) {
    slideshowTimer = setInterval(() => showSlide(activeSlide + 1), 6500);
  }
}
document.querySelector(".hero-carousel-controls").addEventListener("click", event => {
  const button = event.target.closest("[data-slide]");
  if (!button) return;
  if (button.dataset.slide === "previous") showSlide(activeSlide - 1);
  if (button.dataset.slide === "next") showSlide(activeSlide + 1);
  if (button.dataset.slide === "toggle") {
    slideshowPaused = !slideshowPaused;
    button.setAttribute("aria-label", slideshowPaused ? "Play slideshow" : "Pause slideshow");
    button.textContent = slideshowPaused ? "▶" : "Ⅱ";
    startSlideshow();
  }
});
document.addEventListener("visibilitychange", startSlideshow);
if (slideshowPaused) {
  slidePause.setAttribute("aria-label", "Play slideshow");
  slidePause.textContent = "▶";
}
showSlide(0);
startSlideshow();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

let pendingInstallPrompt;
const installButton = document.querySelector("#install-app");
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  pendingInstallPrompt = event;
  installButton.hidden = false;
});
installButton.addEventListener("click", async () => {
  if (!pendingInstallPrompt) return;
  pendingInstallPrompt.prompt();
  await pendingInstallPrompt.userChoice;
  pendingInstallPrompt = undefined;
  installButton.hidden = true;
});
window.addEventListener("appinstalled", () => {
  installButton.hidden = true;
  pendingInstallPrompt = undefined;
});


