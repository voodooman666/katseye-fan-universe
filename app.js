const members = [
  { id: "daniela", name: "Daniela", initial: "D", photo: "https://www.katseye.world/wp-content/uploads/sites/2863/2024/06/06.09.Daniela_slide1-sm-compressed.jpg", instagram: "https://www.instagram.com/daniela_avanzini/", charm: "Guardian Shield", charmNote: "Courage, loyalty and a protective heart.", bio: "Daniela is from Atlanta, Georgia, and began dancing as a young child. Her early ballroom experience included appearances on America’s Got Talent and So You Think You Can Dance: The Next Generation. She later joined Dream Academy, where the November 2023 finale named her among KATSEYE’s six members.", fact: "A 2025 Netflix Tudum member guide notes that she is double-jointed in her left hand.", glow: "rgba(241,151,192,.45)", shade: "#493047" },
  { id: "lara", name: "Lara", initial: "L", photo: "https://www.katseye.world/wp-content/uploads/sites/2863/2024/06/06.09.Lara_slide1-sm-compressed.jpg", instagram: "https://www.instagram.com/lararajj/", charm: "Limitless Key", charmNote: "Curiosity, compassion and a love of discovery.", bio: "Lara is a first-generation Indian American artist who grew up in Los Angeles. She has described dreaming about pop music from an early age and feeling most at home in a recording studio. Before KATSEYE, she worked in television and music, including a campaign for Michelle Obama’s Global Girls Alliance, and competed on Dream Academy.", fact: "Netflix Tudum’s 2025 member guide describes her as having near-perfect pitch.", glow: "rgba(198,168,255,.42)", shade: "#39304e" },
  { id: "manon", name: "Manon", initial: "M", photo: "https://www.katseye.world/wp-content/uploads/sites/2863/2024/06/06.09.Manon_slide1-sm-compressed.jpg", instagram: "https://www.instagram.com/meretmanon/", charm: "Stellar Tiara", charmNote: "Warmth, grace and quiet confidence.", bio: "Manon is from Lucerne, Switzerland, and has spoken about how her family’s Swiss, Italian and Ghanaian backgrounds shaped her perspective. She began writing songs as a teenager and took part in Dream Academy before being selected for KATSEYE at the 2023 finale. Her story brings songwriting and a mix of cultural influences into the group’s international lineup.", fact: "A fun detail shared in Netflix Tudum’s 2025 member guide: she can wiggle her ears.", glow: "rgba(234,175,208,.42)", shade: "#4a3046" },
  { id: "megan", name: "Megan", initial: "M", photo: "https://www.katseye.world/wp-content/uploads/sites/2863/2024/06/06.09.Megan_slide1-sm-compressed.jpg", instagram: "https://www.instagram.com/meganskiendiel/", charm: "Dual Cherry", charmNote: "Wit, confidence and lively energy.", bio: "Megan grew up in Honolulu, Hawaii, and started dancing at a young age. As a child she also enjoyed modeling, acting and playing the ukulele; she began learning hula and Tahitian dance when she was very young. She later trained and performed on Dream Academy, where she earned a place in KATSEYE’s final lineup.", fact: "Netflix Tudum’s 2025 member guide says she began learning hula and Tahitian dance very young.", glow: "rgba(199,180,255,.4)", shade: "#39334d" },
  { id: "sophia", name: "Sophia", initial: "S", photo: "https://www.katseye.world/wp-content/uploads/sites/2863/2024/06/06.09.Sophia_slide1-sm-compressed.jpg", instagram: "https://www.instagram.com/sophia_laforteza/", charm: "Dream Anchor", charmNote: "Kindness, steadiness and thoughtful guidance.", bio: "Sophia is from Manila, Philippines, and has been singing since she was a young child. She speaks English and Tagalog, and brought years of singing experience to Dream Academy. She was announced as a member of KATSEYE at the program’s November 2023 finale.", fact: "One instrument Sophia has said she would love to learn is the violin.", glow: "rgba(245,174,202,.4)", shade: "#4b303e" },
  { id: "yoonchae", name: "Yoonchae", initial: "Y", photo: "https://www.katseye.world/wp-content/uploads/sites/2863/2024/06/06.09.Yoonchae_slide1-sm-compressed.jpg", instagram: "https://www.instagram.com/y0on_cha3/", charm: "Soothing Shell", charmNote: "Authenticity, gentleness and a calm presence.", bio: "Yoonchae is from Seoul, South Korea, and joined Dream Academy as one of its youngest contestants. She has said she hopes to grow into an artist who can inspire an audience. Away from performing, she enjoys listening to music and drawing the images it brings to mind; she was selected for KATSEYE at the program’s finale.", fact: "Netflix Tudum’s 2025 member guide says she enjoys drawing what music inspires her to imagine.", glow: "rgba(187,171,255,.4)", shade: "#37304a" }
];
// Birthday data and ages are checked against artist-managed profile listings on 30 October 2026.
// Heights, countries and zodiac signs are from Netflix Tudum's Dream Academy-era member guide.
const memberFacts = {
  daniela: { fullName: "Daniela Avanzini", hometown: "Atlanta, Georgia, USA", country: "United States", birthday: "2004-07-01", height: "5 ft 4 in (reported in Tudum’s 2025 guide)", zodiac: "Cancer" },
  lara: { fullName: "Lara Raj", hometown: "Los Angeles, California, USA", country: "United States", birthday: "2005-11-03", height: "5 ft 6 in (reported in Tudum’s 2025 guide)", zodiac: "Scorpio" },
  manon: { fullName: "Manon Bannerman", hometown: "Lucerne, Switzerland", country: "Switzerland", birthday: "2002-06-26", height: "5 ft 5 in (reported in Tudum’s 2025 guide)", zodiac: "Cancer" },
  megan: { fullName: "Megan Skiendiel", hometown: "Honolulu, Hawaii, USA", country: "United States", birthday: "2006-02-10", height: "5 ft 6 in (reported in Tudum’s 2025 guide)", zodiac: "Aquarius" },
  sophia: { fullName: "Sophia Laforteza", hometown: "Manila, Philippines", country: "Philippines", birthday: "2002-12-31", height: "5 ft 6 in (reported in Tudum’s 2025 guide)", zodiac: "Capricorn" },
  yoonchae: { fullName: "Yoonchae Jeung", hometown: "Seoul, South Korea", country: "South Korea", birthday: "2007-12-06", height: "5 ft 5 in (reported in Tudum’s 2025 guide)", zodiac: "Sagittarius" }
};
const notVerified = "Not listed in the verified profiles checked";
function currentAge(birthday) {
  const [year, month, day] = birthday.split("-").map(Number);
  const now = new Date();
  let age = now.getFullYear() - year;
  if (now.getMonth() + 1 < month || (now.getMonth() + 1 === month && now.getDate() < day)) age--;
  return age;
}
function renderProfileFacts(id) {
  const facts = memberFacts[id];
  const member = members.find(item => item.id === id);
  if (!facts || !member) return;
  const rows = [
    ["Full public name", facts.fullName], ["From", facts.hometown], ["Country listed", facts.country],
    ["Date of birth", facts.birthday], ["Age", `${currentAge(facts.birthday)} · calculated from date of birth`],
    ["Height", facts.height], ["Star sign", facts.zodiac], ["Favorite food", notVerified],
    ["Favorite color", notVerified], ["Natural hair color", notVerified], ["Eye color", notVerified]
  ];
  document.querySelector("#profile-facts").innerHTML = rows.map(([label, value]) => `<div class="profile-fact-row"><dt>${label}</dt><dd>${value}</dd></div>`).join("");
}
const tourEvents = [
  ["2026-10-30", "30 Oct 2026", "Bell Centre", "Montreal, Canada"], ["2026-11-01", "1 Nov 2026", "TD Coliseum", "Hamilton, Canada"],
  ["2026-11-03", "3 Nov 2026", "Little Caesars Arena", "Detroit, USA"], ["2026-11-05", "5 Nov 2026", "United Center", "Chicago, USA"],
  ["2026-11-07", "7 Nov 2026", "Target Center", "Minneapolis, USA"], ["2026-11-10", "10 Nov 2026", "Moody Center", "Austin, USA"],
  ["2026-11-11", "11 Nov 2026", "American Airlines Center", "Dallas, USA"], ["2026-11-14", "14 Nov 2026", "Grand Garden Arena", "Las Vegas, USA"],
  ["2026-11-17", "17 Nov 2026", "Climate Pledge Arena", "Seattle, USA"], ["2026-11-19", "19 Nov 2026", "Oakland Arena", "Oakland, USA"],
  ["2026-11-21", "21 Nov 2026", "Crypto.com Arena", "Los Angeles, USA"], ["2026-11-22", "22 Nov 2026", "Crypto.com Arena", "Los Angeles, USA"],
  ["2026-11-24", "24 Nov 2026", "Mortgage Matchup Center", "Phoenix, USA"], ["2026-11-27", "27 Nov 2026", "Palacio de los Deportes", "Mexico City, Mexico"],
  ["2026-11-28", "28 Nov 2026", "Palacio de los Deportes", "Mexico City, Mexico"], ["2026-12-01", "1 Dec 2026", "106.1 KISS FM’s Jingle Ball", "Fort Worth, USA"],
  ["2027-01-23", "23–24 Jan 2027", "Lollapalooza", "Mumbai, India"], ["2027-01-27", "27 Jan 2027", "Yokohama Arena", "Yokohama, Japan"],
  ["2027-01-29", "29 Jan 2027", "SM Mall of Asia Arena", "Manila, Philippines"], ["2027-02-01", "1 Feb 2027", "AsiaWorld-Arena", "Hong Kong"],
  ["2027-02-04", "4 Feb 2027", "KSPO Dome", "Seoul, South Korea"], ["2027-02-07", "7 Feb 2027", "SM Seaside Cebu Arena", "Cebu, Philippines"],
  ["2027-02-10", "10 Feb 2027", "Singapore Indoor Stadium", "Singapore"], ["2027-02-12", "12 Feb 2027", "IMPACT Arena", "Bangkok, Thailand"],
  ["2027-02-14", "14 Feb 2027", "Messe Taoyuan", "Taipei, Taiwan"], ["2027-02-24", "24 Feb 2027", "Rod Laver Arena", "Melbourne, Australia"],
  ["2027-02-28", "28 Feb 2027", "Afterpay Arena", "Sydney, Australia"], ["2027-03-05", "5 Mar 2027", "Spark Arena", "Auckland, New Zealand"],
  ["2027-08-13", "13–14 Aug 2027", "Orange Warsaw Festival", "Warsaw, Poland"]
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
const quizQuestions = [
  { prompt: "Pick a little creative project.", answers: [
    { label: "Put together a dance routine", summary: "dance and movement", member: "daniela" },
    { label: "Make a playlist or moodboard", summary: "music and creative ideas", member: "lara" },
    { label: "Try a new art or craft", summary: "trying something imaginative", member: "megan" },
    { label: "Plan a mini photo story", summary: "turning moments into a story", member: "sophia" }
  ] },
  { prompt: "In a group activity, what sounds most fun?", answers: [
    { label: "Bring the energy", summary: "bringing lively energy", member: "daniela" },
    { label: "Help everyone feel included", summary: "making room for everyone", member: "sophia" },
    { label: "Notice all the little details", summary: "spotting thoughtful details", member: "manon" },
    { label: "Dream up an unexpected idea", summary: "following a surprising idea", member: "lara" }
  ] },
  { prompt: "Choose a favorite kind of reset.", answers: [
    { label: "Move around to a favorite song", summary: "a music-filled reset", member: "megan" },
    { label: "Quiet time with a sketchbook", summary: "a calm, creative moment", member: "yoonchae" },
    { label: "Take a walk somewhere new", summary: "a little exploration", member: "manon" },
    { label: "Have a cozy catch-up", summary: "time with people you enjoy", member: "sophia" }
  ] },
  { prompt: "Choose a scene for your fan-made universe.", answers: [
    { label: "Sparkling stage lights", summary: "bright stage energy", member: "daniela" },
    { label: "Soft sunset colors", summary: "soft colors and a relaxed mood", member: "yoonchae" },
    { label: "Playful pops of color", summary: "playful details", member: "megan" },
    { label: "A quiet sky full of stars", summary: "a peaceful atmosphere", member: "manon" }
  ] }
];
const quizAnswers = Array(quizQuestions.length).fill(null);
let quizStep = 0;
let activeQuizMatch = null;
const quizForm = document.querySelector("#member-quiz");
const quizQuestionHost = document.querySelector("#quiz-question-host");
const quizResult = document.querySelector("#quiz-result");
function renderQuizQuestion() {
  const question = quizQuestions[quizStep];
  document.querySelector("#quiz-step-label").textContent = `Question ${quizStep + 1} of ${quizQuestions.length}`;
  document.querySelector("#quiz-progress").value = quizStep + 1;
  document.querySelector("#quiz-back").hidden = quizStep === 0;
  document.querySelector("#quiz-next").textContent = quizStep === quizQuestions.length - 1 ? "See my match →" : "Next question →";
  document.querySelector("#quiz-error").hidden = true;
  quizQuestionHost.innerHTML = `<fieldset class="quiz-question"><legend tabindex="-1">${question.prompt}</legend><div class="quiz-options">${question.answers.map((answer, index) => `<label class="quiz-option"><input type="radio" name="quiz-answer" value="${index}" ${quizAnswers[quizStep] === index ? "checked" : ""}><span>${answer.label}</span></label>`).join("")}</div></fieldset>`;
}
function showQuizResult() {
  const scores = Object.fromEntries(members.map(member => [member.id, 0]));
  const selectedAnswers = quizAnswers.map((answerIndex, questionIndex) => quizQuestions[questionIndex].answers[answerIndex]);
  selectedAnswers.forEach(answer => { scores[answer.member] += 1; });
  const bestScore = Math.max(...Object.values(scores));
  const tiedIds = Object.keys(scores).filter(id => scores[id] === bestScore);
  const finalAnswerMember = selectedAnswers[selectedAnswers.length - 1].member;
  activeQuizMatch = members.find(member => tiedIds.includes(finalAnswerMember)) || members.find(member => tiedIds.includes(member.id));
  document.querySelector("#quiz-member-name").textContent = activeQuizMatch.name;
  document.querySelector("#quiz-summary").textContent = `Your choices leaned toward ${selectedAnswers.map(answer => answer.summary).join(", ")}.`;
  const photo = document.querySelector("#quiz-member-photo");
  const initial = document.querySelector("#quiz-member-initial");
  photo.hidden = false;
  initial.hidden = true;
  photo.src = activeQuizMatch.photo;
  photo.alt = `Official KATSEYE member portrait of ${activeQuizMatch.name}`;
  photo.onerror = () => { photo.hidden = true; initial.textContent = activeQuizMatch.initial; initial.hidden = false; };
  quizForm.hidden = true;
  quizResult.hidden = false;
  updateQuizFavouriteButton();
}
function updateQuizFavouriteButton() {
  if (!activeQuizMatch) return;
  const button = document.querySelector("#quiz-add-favourite");
  const selected = favourites.includes(activeQuizMatch.id);
  button.dataset.favourite = activeQuizMatch.id;
  button.setAttribute("aria-pressed", String(selected));
  button.textContent = selected ? "♥ Remove from favourites" : "♡ Add to favourites";
}
quizForm.addEventListener("submit", event => {
  event.preventDefault();
  const selected = quizForm.querySelector('input[name="quiz-answer"]:checked');
  if (!selected) { document.querySelector("#quiz-error").hidden = false; return; }
  quizAnswers[quizStep] = Number(selected.value);
  if (quizStep < quizQuestions.length - 1) {
    quizStep += 1;
    renderQuizQuestion();
    quizQuestionHost.querySelector("legend")?.focus();
  } else {
    showQuizResult();
  }
});
document.querySelector("#quiz-back").addEventListener("click", () => {
  if (quizStep > 0) { quizStep -= 1; renderQuizQuestion(); quizQuestionHost.querySelector("input:checked")?.focus(); }
});
document.querySelector("#quiz-restart").addEventListener("click", () => {
  quizAnswers.fill(null);
  quizStep = 0;
  activeQuizMatch = null;
  quizResult.hidden = true;
  quizForm.hidden = false;
  renderQuizQuestion();
  quizQuestionHost.querySelector("input")?.focus();
});
renderQuizQuestion();
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
      <button class="member-poster-open" type="button" data-profile="${member.id}" aria-label="Open ${member.name}'s profile" aria-haspopup="dialog">
        <span class="member-portrait" style="--glow:${member.glow};--shade:${member.shade}">
          <img src="${member.photo}" alt="" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false">
          <span class="member-initial" aria-hidden="true" hidden>${member.initial}</span><span class="poster-caption" aria-hidden="true">View profile ↗</span>
        </span>
      </button>
      <div class="member-info"><div class="member-top"><h3><button class="member-name-open" type="button" data-profile="${member.id}" aria-haspopup="dialog">${member.name}</button></h3>
        <button class="favourite-button" type="button" data-favourite="${member.id}" aria-pressed="${selected}" aria-label="${selected ? "Remove" : "Add"} ${member.name} ${selected ? "from" : "to"} favourites">${selected ? "♥" : "♡"}</button>
      </div><p>Charm: <span>${member.charm}</span></p></div>
    </article>`;
  }).join("");
}
function renderTour() {
  const today = new Date();
  const upcoming = tourEvents.filter(([iso]) => new Date(`${iso}T23:59:59`) >= today);
  const container = document.querySelector("#tour-events");
  const checked = document.querySelector("#tour-checked");
  checked.textContent = "Fan-curated snapshot · checked 30 October 2026";
  container.innerHTML = upcoming.length ? upcoming.map(([, date, venue, place]) => `<article class="tour-event"><time>${date}</time><div><strong>${venue}</strong><span>${place}</span></div><span class="tour-tag">Listed</span></article>`).join("") : `<div class="empty-state"><strong>No upcoming dates in this saved list</strong>The schedule is a fan-curated snapshot. Check official announcements for newly added dates.</div>`;
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
  if (activeProfileId) renderMemberProfile(activeProfileId);
  updateQuizFavouriteButton();
}
document.addEventListener("click", event => {
  const profileButton = event.target.closest("[data-profile]");
  if (profileButton) { openMemberProfile(profileButton.dataset.profile); return; }
  const button = event.target.closest("[data-favourite]");
  if (!button) return;
  const id = button.dataset.favourite;
  favourites = favourites.includes(id) ? favourites.filter(item => item !== id) : [...favourites, id];
  update();
});
const memberDialog = document.querySelector("#member-profile-dialog");
let activeProfileId = null;
function renderMemberProfile(id) {
  const member = members.find(item => item.id === id);
  if (!member) return;
  document.querySelector("#profile-name").textContent = member.name;
  document.querySelector("#profile-bio").textContent = member.bio;
  renderProfileFacts(id);
  document.querySelector("#profile-charm").textContent = member.charm;
  document.querySelector("#profile-charm-note").textContent = member.charmNote;
  document.querySelector("#profile-fact").textContent = member.fact;
  const photo = document.querySelector("#profile-photo");
  photo.src = member.photo;
  photo.alt = `Official KATSEYE member portrait of ${member.name}`;
  photo.hidden = false;
  document.querySelector("#profile-initial").hidden = true;
  photo.onerror = () => { photo.hidden = true; document.querySelector("#profile-initial").hidden = false; };
  const instagram = document.querySelector("#profile-instagram");
  instagram.href = member.instagram;
  instagram.setAttribute("aria-label", `${member.name} on Instagram (opens external site)`);
  const favouriteButton = document.querySelector("#profile-favourite");
  const selected = favourites.includes(id);
  favouriteButton.dataset.favourite = id;
  favouriteButton.setAttribute("aria-pressed", String(selected));
  favouriteButton.textContent = selected ? "♥ In favourites" : "♡ Add to favourites";
  favouriteButton.setAttribute("aria-label", selected ? `Remove ${member.name} from favourites` : `Add ${member.name} to favourites`);
}
function openMemberProfile(id) {
  activeProfileId = id;
  renderMemberProfile(id);
  if (!memberDialog.open) memberDialog.showModal();
}
document.querySelector("#profile-close").addEventListener("click", () => memberDialog.close());
memberDialog.addEventListener("close", () => { activeProfileId = null; });
memberDialog.addEventListener("click", event => { if (event.target === memberDialog) memberDialog.close(); });
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
renderMembers(); renderAlbums(); renderFavourites(); renderTour();

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



