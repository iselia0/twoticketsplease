/* ===================================
   TWO TICKETS, PLEASE! — app.js
   =================================== */

// ── DATA ──────────────────────────────────────────────────────────────────────

const MOVIES = [
  {
    id: "inside-out-1",
    title: "Inside Out",
    year: 2015,
    genre: "animation",
    ageRating: "PG",
    rating: "⭐ 8.1",
    poster: "https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
    posterEmoji: "🧠",
    posterColor: "#ffd8b1",
    desc: "A girl's emotions — Joy, Sadness, Fear, Anger, Disgust — navigate the ups and downs of moving to a new city. A Pixar masterpiece about feelings.",
    comingSoon: false,
    cinemas: [
      { name: "Odeon Leicester Square", location: "London, UK 🇬🇧", far: false },
      { name: "AMC Empire 25", location: "New York, USA 🇺🇸", far: true },
      { name: "Cineworld Birmingham", location: "Birmingham, UK 🇬🇧", far: false },
    ]
  },
  {
    id: "inside-out-2",
    title: "Inside Out 2",
    year: 2024,
    genre: "animation",
    ageRating: "PG",
    rating: "⭐ 7.8",
    poster: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    posterEmoji: "🔥",
    posterColor: "#f9c4d2",
    desc: "Riley hits puberty and new emotions crash HQ — including Anxiety. A perfect date film about growing up and letting go.",
    comingSoon: false,
    cinemas: [
      { name: "Vue West End", location: "London, UK 🇬🇧", far: false },
      { name: "BFI Southbank", location: "London, UK 🇬🇧", far: false },
      { name: "CGV Gangnam", location: "Seoul, South Korea 🇰🇷", far: true },
    ]
  },
  {
    id: "princess-bride",
    title: "The Princess Bride",
    year: 1987,
    genre: "romance",
    ageRating: "PG",
    rating: "⭐ 8.0",
    poster: "https://m.media-amazon.com/images/I/611zeTfBpoL._AC_UF894,1000_QL80_.jpg",
    posterEmoji: "🌹",
    posterColor: "#d4c5f9",
    desc: "Westley rescues Buttercup from villains, pirates, and an arranged marriage — with sword fights, true love, and one of cinema's greatest kisses.",
    comingSoon: false,
    cinemas: [
      { name: "Everyman Baker Street", location: "London, UK 🇬🇧", far: false },
      { name: "Alamo Drafthouse", location: "Austin, Texas, USA 🇺🇸", far: true },
    ]
  },
  {
    id: "dune-1",
    title: "Dune",
    year: 2021,
    genre: "sci-fi",
    ageRating: "PG-13",
    rating: "⭐ 8.0",
    poster: "https://static.posters.cz/image/1300/122815.jpg",
    posterEmoji: "🏜️",
    posterColor: "#ffd8b1",
    desc: "Paul Atreides journeys to the most dangerous planet in the universe for his family's honour — and discovers a destiny beyond imagination.",
    comingSoon: false,
    cinemas: [
      { name: "IMAX BFI Southbank", location: "London, UK 🇬🇧", far: false },
      { name: "Regal Times Square", location: "New York, USA 🇺🇸", far: true },
      { name: "Cineplex Odeon", location: "Toronto, Canada 🇨🇦", far: true },
    ]
  },
  {
    id: "dune-2",
    title: "Dune: Part Two",
    year: 2024,
    genre: "sci-fi",
    ageRating: "PG-13",
    rating: "⭐ 8.5",
    poster: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    posterEmoji: "🌙",
    posterColor: "#b8f0e6",
    desc: "Paul unites with the Fremen and wages war against those who destroyed his family — while Chani questions everything. Epic on an impossible scale.",
    comingSoon: false,
    cinemas: [
      { name: "Cineworld Leicester Square", location: "London, UK 🇬🇧", far: false },
      { name: "Kinepolis Madrid", location: "Madrid, Spain 🇪🇸", far: true },
      { name: "Event Cinemas", location: "Sydney, Australia 🇦🇺", far: true },
    ]
  },
  {
    id: "dune-3",
    title: "Dune: Messiah",
    year: 2026,
    genre: "sci-fi",
    ageRating: "TBC",
    rating: "⏳ Upcoming",
    poster: "https://posterspy.com/wp-content/uploads/2025/07/7BC99CC1-8290-40C2-A90D-F555B9F4279A.jpeg",
    posterEmoji: "☄️",
    posterColor: "#fff0a0",
    desc: "The highly anticipated third chapter in Denis Villeneuve's Dune saga — details remain under wraps, but the desert awaits.",
    comingSoon: true,
    cinemas: []
  },
  {
    id: "notebook",
    title: "The Notebook",
    year: 2004,
    genre: "romance",
    ageRating: "PG-13",
    rating: "⭐ 7.8",
    poster: "https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    posterEmoji: "🌧️",
    posterColor: "#d4c5f9",
    desc: "A poor country boy and a rich city girl fall madly in love one summer, only to be separated by circumstance, class, and time itself.",
    comingSoon: false,
    cinemas: [
      { name: "Picturehouse Central", location: "London, UK 🇬🇧", far: false },
      { name: "Landmark Theatres", location: "Los Angeles, USA 🇺🇸", far: true },
    ]
  },
  {
    id: "city-of-god",
    title: "City of God",
    year: 2002,
    genre: "crime",
    ageRating: "18+",
    rating: "⭐ 8.6",
    poster: "https://cdn.posteritati.com/posters/000/000/064/105/city-of-god-md-web.jpg",
    posterEmoji: "🔫",
    posterColor: "#ffd8b1",
    desc: "Two boys grow up in Cidade de Deus, Rio's most dangerous slum — one becomes a gangster, the other a photographer. Visceral, unforgettable.",
    comingSoon: false,
    cinemas: [
      { name: "Curzon Soho", location: "London, UK 🇬🇧", far: false },
      { name: "Cinematheque Française", location: "Paris, France 🇫🇷", far: true },
    ]
  },
  {
    id: "fallen-angels",
    title: "Fallen Angels",
    year: 1995,
    genre: "mystery",
    ageRating: "18+",
    rating: "⭐ 7.7",
    poster: "https://media.posterlounge.com/img/products/710000/707696/707696_poster.jpg",
    posterEmoji: "🕯️",
    posterColor: "#d4c5f9",
    desc: "Wong Kar-wai's neon-lit labyrinth: a hitman, his handler who loves him, and a mute ex-con navigating loneliness in nocturnal Hong Kong.",
    comingSoon: false,
    cinemas: [
      { name: "ICA Cinema", location: "London, UK 🇬🇧", far: false },
      { name: "Japan Society Film Center", location: "New York, USA 🇺🇸", far: true },
      { name: "Shin-juku Musashinokan", location: "Tokyo, Japan 🇯🇵", far: true },
    ]
  },
  {
    id: "snatch",
    title: "Snatch",
    year: 2000,
    genre: "crime",
    ageRating: "18+",
    rating: "⭐ 8.3",
    poster: "https://www.prints4u.net/wp-content/uploads/2021/04/Snatch-003.jpeg",
    posterEmoji: "💎",
    posterColor: "#b8f0e6",
    desc: "A stolen diamond triggers a chaotic chain of unlucky gangsters, bookies, bare-knuckle boxers and one very dangerous caravan dweller.",
    comingSoon: false,
    cinemas: [
      { name: "Everyman Chelsea", location: "London, UK 🇬🇧", far: false },
      { name: "Metrograph", location: "New York, USA 🇺🇸", far: true },
    ]
  },
  {
    id: "donnie-darko",
    title: "Donnie Darko",
    year: 2001,
    genre: "thriller",
    ageRating: "15+",
    rating: "⭐ 8.1",
    poster: "https://m.media-amazon.com/images/M/MV5BMWE3NTYzZmEtM2U5MS00MDZhLTk2ZTQtZTgzNjg0ZGQ5ZjM0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    posterEmoji: "🐰",
    posterColor: "#f9c4d2",
    desc: "A troubled teenager escapes death, only to be visited by a terrifying figure in a rabbit suit who says the world will end in 28 days.",
    comingSoon: false,
    cinemas: [
      { name: "Barbican Cinema", location: "London, UK 🇬🇧", far: false },
      { name: "Alamo Drafthouse", location: "Austin, Texas, USA 🇺🇸", far: true },
    ]
  },
];

const SHOWTIMES = ["10:00 AM","12:30 PM","3:00 PM","5:45 PM","8:15 PM","10:30 PM"];

// ── STATE ─────────────────────────────────────────────────────────────────────

let activeGenre = "all";
let bookingState = {
  movie: null,
  quantity: 2,
  cinema: null,
  showtime: null,
  step: 1 // 1=tickets, 2=cinema, 3=showtime, 4=confirm
};

// ── INIT ──────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderMovies();
  bindGenrePills();
  bindSoloBtn();
  bindModalClose();
});

// ── RENDER MOVIES ─────────────────────────────────────────────────────────────

function renderMovies() {
  const grid = document.getElementById("moviesGrid");
  grid.innerHTML = "";
  MOVIES.forEach(m => {
    const card = buildMovieCard(m);
    grid.appendChild(card);
  });
}

function buildMovieCard(movie) {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.dataset.genre = movie.genre;
  card.dataset.id = movie.id;

  const posterHTML = movie.poster
    ? `<img class="card-poster" src="${movie.poster}" alt="${movie.title} poster" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
      + `<div class="poster-placeholder" style="background:${movie.posterColor};display:none">${movie.posterEmoji}</div>`
    : `<div class="poster-placeholder" style="background:${movie.posterColor}">${movie.posterEmoji}</div>`;

  const ribbonHTML = movie.comingSoon
    ? `<div class="coming-soon-ribbon">Coming Soon ✨</div>`
    : "";

  card.innerHTML = `
    ${posterHTML}
    ${ribbonHTML}
    <div class="card-body">
      <div class="card-title">${movie.title} <span style="font-size:14px;opacity:.6">(${movie.year})</span></div>
      <div class="card-meta">
        <span class="badge badge-genre">${genreLabel(movie.genre)}</span>
        <span class="badge badge-age">${movie.ageRating}</span>
        <span class="badge badge-rating">${movie.rating}</span>
      </div>
      <p class="card-desc">${movie.desc}</p>
      <button class="card-btn" ${movie.comingSoon ? "disabled" : ""} data-id="${movie.id}">
        ${movie.comingSoon ? "🔔 Coming Soon" : "🎟️ Get Two Tickets!"}
      </button>
    </div>
  `;

  if (!movie.comingSoon) {
    card.querySelector(".card-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      openBookingModal(movie.id);
    });
  }

  return card;
}

function genreLabel(g) {
  const map = {
    animation:"Animation 🎨", romance:"Romance 💌",
    "sci-fi":"Sci-Fi 🚀", crime:"Crime 🔍",
    thriller:"Thriller 🌀", mystery:"Mystery 🎭"
  };
  return map[g] || g;
}

// ── GENRE FILTER ──────────────────────────────────────────────────────────────

function bindGenrePills() {
  document.querySelectorAll(".pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeGenre = pill.dataset.genre;
      filterMovies();
    });
  });
}

function filterMovies() {
  document.querySelectorAll(".movie-card").forEach(card => {
    const match = activeGenre === "all" || card.dataset.genre === activeGenre;
    card.classList.toggle("hidden", !match);
  });
}

// ── BOOKING MODAL ─────────────────────────────────────────────────────────────

function openBookingModal(movieId) {
  const movie = MOVIES.find(m => m.id === movieId);
  bookingState = { movie, quantity: 2, cinema: null, showtime: null, step: 1 };
  renderBookingStep();
  document.getElementById("bookingModal").classList.add("open");
}

function renderBookingStep() {
  const container = document.getElementById("modalContent");
  const { movie, step, quantity, cinema, showtime } = bookingState;
  container.innerHTML = "";

  if (step === 1) renderStep1(container, movie, quantity);
  else if (step === 2) renderStep2(container, movie, quantity);
  else if (step === 3) renderStep3(container, movie, quantity, cinema);
  else if (step === 4) renderStep4(container, movie, quantity, cinema, showtime);
}

/* Step 1: ticket quantity */
function renderStep1(el, movie, qty) {
  const isOdd = qty % 2 !== 0 && qty >= 3;

  el.innerHTML = `
    <div class="modal-step-label">Step 1 of 3 — Tickets</div>
    <div class="modal-movie-title">${movie.title}</div>
    <p style="font-family:var(--font-note);color:var(--ink-light);font-size:15px;margin-bottom:4px">
      ${movie.year} · ${movie.ageRating} · ${genreLabel(movie.genre)}
    </p>

    <div class="quantity-row">
      <span class="qty-label">🎟️ Tickets</span>
      <button class="qty-btn" id="qtyMinus">−</button>
      <span class="qty-count" id="qtyCount">${qty}</span>
      <button class="qty-btn" id="qtyPlus">+</button>
    </div>

    <div class="third-wheel-msg" id="thirdWheelMsg" style="display:${isOdd?'block':'none'}">
      🚲 <strong>who is being the third wheel?</strong><br><br>
      This is a couples' cinema! We pair solo guests with fellow movie-lovers.<br><br>
      <span style="font-size:13px;opacity:.8">Want us to find your odd one out a match? They might just meet their soulmate in the popcorn queue 🍿💕</span>
    </div>

    <p style="font-family:var(--font-note);font-size:13px;color:var(--ink-light);margin-top:4px">
      ✨ Minimum 2 tickets — this is a place for pairs!
    </p>

    <div class="modal-actions" style="margin-top:20px">
      <button class="btn-primary" id="step1Next">Choose Cinema →</button>
    </div>
  `;

  el.querySelector("#qtyMinus").addEventListener("click", () => {
    if (bookingState.quantity > 2) bookingState.quantity--;
    renderBookingStep();
  });
  el.querySelector("#qtyPlus").addEventListener("click", () => {
    bookingState.quantity++;
    renderBookingStep();
  });
  el.querySelector("#step1Next").addEventListener("click", () => {
    bookingState.step = 2;
    renderBookingStep();
  });
}

/* Step 2: cinema selection */
function renderStep2(el, movie, qty) {
  const hasFar = movie.cinemas.some(c => c.far);
  const cinemasHTML = movie.cinemas.map((c,i) => `
    <div class="cinema-item" data-index="${i}">
      <div class="cinema-info">
        <div class="cinema-name">${c.name}</div>
        <div class="cinema-location">${c.location}</div>
      </div>
      <span class="cinema-badge ${c.far ? 'badge-far':'badge-local'}">${c.far ? "✈️ Far away" : "📍 Nearby"}</span>
    </div>
  `).join("");

  el.innerHTML = `
    <div class="modal-step-label">Step 2 of 3 — Choose Your Cinema</div>
    <div class="modal-movie-title" style="font-size:30px">${movie.title}</div>
    <p style="font-family:var(--font-note);color:var(--ink-light);font-size:14px;margin-bottom:12px">
      ${qty} ticket${qty>1?"s":""} · Select a cinema
    </p>

    <div class="cinemas-list">${cinemasHTML}</div>

    <div class="travel-notice" id="travelNotice">
      <h4>✈️ That's quite the adventure!</h4>
      <p>This cinema is a long way away — how exciting! You might want to book a hotel and flights for the ultimate movie date trip.</p>
      <div class="travel-links">
        <a class="travel-link" href="https://www.booking.com" target="_blank">🏨 Hotels</a>
        <a class="travel-link" href="https://www.skyscanner.com" target="_blank">✈️ Flights</a>
        <a class="travel-link" href="https://www.airbnb.com" target="_blank">🏠 Airbnb</a>
      </div>
    </div>

    <div class="modal-actions">
      <button class="btn-secondary" id="step2Back">← Back</button>
      <button class="btn-primary" id="step2Next" disabled>Pick Showtimes →</button>
    </div>
  `;

  el.querySelectorAll(".cinema-item").forEach(item => {
    item.addEventListener("click", () => {
      el.querySelectorAll(".cinema-item").forEach(x => x.classList.remove("selected"));
      item.classList.add("selected");
      const idx = parseInt(item.dataset.index);
      bookingState.cinema = movie.cinemas[idx];
      el.querySelector("#step2Next").disabled = false;
      const travelEl = el.querySelector("#travelNotice");
      travelEl.style.display = bookingState.cinema.far ? "block" : "none";
    });
  });

  el.querySelector("#step2Back").addEventListener("click", () => { bookingState.step = 1; renderBookingStep(); });
  el.querySelector("#step2Next").addEventListener("click", () => { bookingState.step = 3; renderBookingStep(); });
}

/* Step 3: showtime */
function renderStep3(el, movie, qty, cinema) {
  const timesHTML = SHOWTIMES.map(t => `
    <button class="showtime-btn" data-time="${t}">${t}</button>
  `).join("");

  el.innerHTML = `
    <div class="modal-step-label">Step 3 of 3 — Pick a Showtime</div>
    <div class="modal-movie-title" style="font-size:28px">${movie.title}</div>
    <p style="font-family:var(--font-note);color:var(--ink-light);font-size:14px;margin-bottom:14px">
      📍 ${cinema.name}, ${cinema.location}<br>
      🎟️ ${qty} ticket${qty>1?"s":""}
    </p>
    <div class="showtimes-grid">${timesHTML}</div>
    <div class="modal-actions" style="margin-top:10px">
      <button class="btn-secondary" id="step3Back">← Back</button>
      <button class="btn-primary" id="step3Next" disabled>Confirm Booking 🎉</button>
    </div>
  `;

  el.querySelectorAll(".showtime-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      el.querySelectorAll(".showtime-btn").forEach(x => x.classList.remove("selected"));
      btn.classList.add("selected");
      bookingState.showtime = btn.dataset.time;
      el.querySelector("#step3Next").disabled = false;
    });
  });

  el.querySelector("#step3Back").addEventListener("click", () => { bookingState.step = 2; renderBookingStep(); });
  el.querySelector("#step3Next").addEventListener("click", () => { bookingState.step = 4; renderBookingStep(); });
}

/* Step 4: confirmation */
function renderStep4(el, movie, qty, cinema, showtime) {
  const totalPrice = qty * 14.50;
  const oddOnes = qty % 2 !== 0 ? `<p style="font-family:var(--font-note);font-size:14px;color:var(--ink-light);margin-top:8px">🚲 We'll find a match for your +1 who is flying solo!</p>` : "";

  el.innerHTML = `
    <div style="text-align:center">
      <div style="font-size:56px;margin-bottom:8px">🎉</div>
      <div class="modal-movie-title">${movie.title}</div>
      <div class="modal-step-label" style="margin:8px 0 16px">Booking Confirmed!</div>
    </div>

    <div class="booking-confirm">
      <p>📍 <strong>${cinema.name}</strong></p>
      <p style="margin-top:6px">🌍 ${cinema.location}</p>
      <p style="margin-top:6px">🕐 ${showtime}</p>
      <p style="margin-top:6px">🎟️ ${qty} ticket${qty>1?"s":""}</p>
      <p style="margin-top:10px;font-size:22px;font-family:var(--font-hand);font-weight:700">Total: £${totalPrice.toFixed(2)}</p>
      ${oddOnes}
    </div>

    ${cinema.far ? `
    <div class="travel-notice" style="display:block">
      <h4>✈️ Don't forget your travel!</h4>
      <p>This cinema is far away — make it a proper adventure!</p>
      <div class="travel-links">
        <a class="travel-link" href="https://www.booking.com" target="_blank">🏨 Hotels</a>
        <a class="travel-link" href="https://www.skyscanner.com" target="_blank">✈️ Flights</a>
        <a class="travel-link" href="https://www.airbnb.com" target="_blank">🏠 Airbnb</a>
      </div>
    </div>` : ""}

    <div class="modal-actions">
      <button class="btn-secondary" id="step4Reset">Book Another 🎬</button>
      <button class="btn-primary" id="step4Done">All done! 💕</button>
    </div>
  `;

  el.querySelector("#step4Reset").addEventListener("click", () => { bookingState.step = 1; bookingState.cinema = null; bookingState.showtime = null; renderBookingStep(); });
  el.querySelector("#step4Done").addEventListener("click", closeBookingModal);
}

// ── CLOSE MODALS ──────────────────────────────────────────────────────────────

function bindModalClose() {
  document.getElementById("closeModal").addEventListener("click", closeBookingModal);
  document.getElementById("closeSoloModal").addEventListener("click", closeSoloModal);

  document.getElementById("bookingModal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeBookingModal();
  });
  document.getElementById("soloModal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeSoloModal();
  });
}

function closeBookingModal() {
  document.getElementById("bookingModal").classList.remove("open");
}
function closeSoloModal() {
  document.getElementById("soloModal").classList.remove("open");
}

// ── SOLO SECTION ──────────────────────────────────────────────────────────────

function bindSoloBtn() {
  document.getElementById("soloMatchBtn").addEventListener("click", openSoloModal);
}

function openSoloModal() {
  const availableMovies = MOVIES.filter(m => !m.comingSoon);
  const options = availableMovies.map(m => `<option value="${m.id}">${m.title} (${m.year})</option>`).join("");

  document.getElementById("soloContent").innerHTML = `
    <div class="solo-match-card">
      <div class="match-emoji">💫</div>
      <h2>Find Your Movie Match!</h2>
      <p>Pick a film you want to see, and we'll pair you with a solo cinema-goer who wants to see the same thing. Who knows — maybe it's fate? 💕</p>

      <div class="modal-step-label" style="text-align:left">Which film are you hoping to see?</div>
      <select class="solo-movie-select" id="soloMovieSelect">
        <option value="">— Pick a film —</option>
        ${options}
      </select>

      <button class="btn-primary" id="soloFindMatch" style="width:100%;margin-bottom:14px" disabled>
        🔍 Find My Match!
      </button>

      <div class="match-result" id="matchResult">
        <h4>✨ Great news!</h4>
        <p id="matchText"></p>
      </div>

      <p style="font-size:13px;font-family:var(--font-note);color:var(--ink-light);margin-top:12px">
        This is a demo — in real life we'd connect you with actual solo movie-goers in your city! 🌍
      </p>
    </div>
  `;

  const select = document.getElementById("soloMovieSelect");
  const findBtn = document.getElementById("soloFindMatch");

  select.addEventListener("change", () => {
    findBtn.disabled = !select.value;
  });

  findBtn.addEventListener("click", () => {
    const movie = MOVIES.find(m => m.id === select.value);
    const names = ["Gulnara","Camal","Nihat","NIgar H"];
    const name = names[Math.floor(Math.random() * names.length)];
    const cinema = movie.cinemas.find(c => !c.far) || movie.cinemas[0];
    const time = SHOWTIMES[Math.floor(Math.random() * SHOWTIMES.length)];

    document.getElementById("matchText").innerHTML = `
      We found <strong>${name}</strong>, who also wants to see <strong>${movie.title}</strong>! 🎉<br><br>
      They're planning to go to <strong>${cinema ? cinema.name : "a nearby cinema"}</strong> at <strong>${time}</strong>.<br><br>
      Want to make it a date? 💌
    `;

    document.getElementById("matchResult").style.display = "block";
    findBtn.textContent = "🔄 Try Again";
  });

  document.getElementById("soloModal").classList.add("open");
}
function getProfile() {
  const raw = localStorage.getItem("ttp_profile");
  return raw ? JSON.parse(raw) : {
    name: "Movie Lover",
    emoji: "🎬",
    bookings: [],
    wishlist: []
  };
}
 
function saveProfile(data) {
  localStorage.setItem("ttp_profile", JSON.stringify(data));
}
 
function addBookingToHistory(booking) {
  const profile = getProfile();
  profile.bookings.unshift({
    id: Date.now(),
    movie: booking.movie.title,
    emoji: booking.movie.posterEmoji,
    cinema: booking.cinema.name,
    time: booking.showtime,
    qty: booking.quantity,
    total: (booking.quantity * 14.50).toFixed(2),
    date: new Date().toLocaleDateString("en-GB", { day:"numeric", month:"short", year:"numeric" })
  });
  saveProfile(profile);
}
 
 
// ── PROFILE MODAL ─────────────────────────────────────────────────────────────
 
// Nav linkini bind et — index.html-deki <nav>-a asagidaki linki elave etdikden sonra
// <a href="#" id="openProfileBtn">👤 My Profile</a>
// bu kod onu tapib bind edir:
document.addEventListener("DOMContentLoaded", () => {
  const profileBtn = document.getElementById("openProfileBtn");
  if (profileBtn) {
    profileBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openProfileModal();
    });
  }
 
  document.getElementById("closeProfileModal")?.addEventListener("click", () => {
    document.getElementById("profileModal").classList.remove("open");
  });
 
  document.getElementById("closePaymentModal")?.addEventListener("click", () => {
    document.getElementById("paymentModal").classList.remove("open");
  });
 
  document.getElementById("profileModal")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget)
      document.getElementById("profileModal").classList.remove("open");
  });
 
  document.getElementById("paymentModal")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget)
      document.getElementById("paymentModal").classList.remove("open");
  });
});
 
 
function openProfileModal() {
  renderProfileModal();
  document.getElementById("profileModal").classList.add("open");
}
 
function renderProfileModal() {
  const profile = getProfile();
  const el = document.getElementById("profileContent");
 
  el.innerHTML = `
    <div class="profile-header">
      <div class="avatar-wrap" id="avatarWrap" title="Click to change emoji">
        <div class="avatar" id="avatarDisplay">${profile.emoji}</div>
        <div class="avatar-edit-badge">✏️</div>
      </div>
      <div class="profile-names">
        <h2 id="profileNameDisplay">${profile.name}</h2>
        <span>click name to edit ✏️</span>
      </div>
    </div>
 
    <!-- Emoji picker (hidden by default) -->
    <div id="emojiPicker" style="display:none;margin:-10px 0 16px;background:var(--cream);border:2px solid var(--ink);border-radius:var(--radius);padding:12px;line-height:2">
      ${["🎬","🍿","🎞️","💕","⭐","🎭","🔮","🌙","🦋","🌸","🎪","🎨","🦄","🐰","💎"].map(e =>
        `<button onclick="setEmoji('${e}')" style="background:none;border:none;font-size:26px;cursor:pointer;padding:4px;border-radius:8px" title="${e}">${e}</button>`
      ).join("")}
    </div>
 
    <div class="profile-stats">
      <div class="stat-pill">
        <span class="stat-num">${profile.bookings.length}</span>
        <span class="stat-label">Bookings</span>
      </div>
      <div class="stat-pill">
        <span class="stat-num">${profile.bookings.reduce((s,b) => s + b.qty, 0)}</span>
        <span class="stat-label">Tickets</span>
      </div>
      <div class="stat-pill">
        <span class="stat-num">£${profile.bookings.reduce((s,b) => s + parseFloat(b.total), 0).toFixed(0)}</span>
        <span class="stat-label">Spent</span>
      </div>
      <div class="stat-pill">
        <span class="stat-num">${profile.wishlist.length}</span>
        <span class="stat-label">Wishlist</span>
      </div>
    </div>
 
    <div class="profile-tabs">
      <button class="profile-tab active" data-tab="bookings">🎟️ Bookings</button>
      <button class="profile-tab" data-tab="wishlist">💌 Wishlist</button>
      <button class="profile-tab" data-tab="settings">⚙️ Settings</button>
    </div>
 
    <!-- Bookings Tab -->
    <div class="profile-tab-panel active" id="tab-bookings">
      ${profile.bookings.length === 0 ? `
        <div class="empty-state">
          <span class="empty-emoji">🎟️</span>
          No bookings yet! Go grab some tickets 💕
        </div>
      ` : `
        <div class="booking-history">
          ${profile.bookings.map(b => `
            <div class="booking-row">
              <div class="booking-row-emoji">${b.emoji}</div>
              <div class="booking-row-info">
                <strong>${b.movie}</strong>
                <span>${b.cinema} · ${b.time} · ${b.date}</span>
              </div>
              <div class="booking-row-price">£${b.total}</div>
            </div>
          `).join("")}
        </div>
      `}
    </div>
 
    <!-- Wishlist Tab -->
    <div class="profile-tab-panel" id="tab-wishlist">
      ${profile.wishlist.length === 0 ? `
        <div class="empty-state">
          <span class="empty-emoji">💌</span>
          No wishlist films yet! Heart a movie to add it here.
        </div>
      ` : `
        <div class="wishlist-grid">
          ${profile.wishlist.map(w => `
            <div class="wishlist-chip">
              <button class="wishlist-remove" onclick="removeFromWishlist('${w.id}')">✕</button>
              <span class="wl-emoji">${w.emoji}</span>
              ${w.title}
            </div>
          `).join("")}
        </div>
      `}
    </div>
 
    <!-- Settings Tab -->
    <div class="profile-tab-panel" id="tab-settings">
      <div class="payment-form" style="margin-top:12px">
        <div class="form-group">
          <label class="form-label">Display Name</label>
          <input class="form-input" id="settingsName" value="${profile.name}" placeholder="Your name" />
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input class="form-input" id="settingsEmail" value="${profile.email || ""}" placeholder="your@email.com" type="email" />
        </div>
        <div class="modal-actions">
          <button class="btn-primary" onclick="saveSettings()">Save Changes 💾</button>
          <button class="btn-secondary" style="background:var(--peach)" onclick="clearAllData()">Clear All Data 🗑️</button>
        </div>
      </div>
    </div>
  `;
 
  // Tab switching
  el.querySelectorAll(".profile-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      el.querySelectorAll(".profile-tab").forEach(t => t.classList.remove("active"));
      el.querySelectorAll(".profile-tab-panel").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      el.querySelector(`#tab-${tab.dataset.tab}`).classList.add("active");
    });
  });
 
  // Avatar emoji picker toggle
  el.querySelector("#avatarWrap").addEventListener("click", () => {
    const picker = el.querySelector("#emojiPicker");
    picker.style.display = picker.style.display === "none" ? "block" : "none";
  });
 
  // Inline name edit
  el.querySelector("#profileNameDisplay").addEventListener("click", () => {
    const display = el.querySelector("#profileNameDisplay");
    const input = document.createElement("input");
    input.className = "profile-name-input";
    input.value = profile.name;
    display.replaceWith(input);
    input.focus();
    input.addEventListener("blur", () => {
      if (input.value.trim()) {
        profile.name = input.value.trim();
        saveProfile(profile);
      }
      renderProfileModal();
    });
    input.addEventListener("keydown", e => { if (e.key === "Enter") input.blur(); });
  });
}
 
window.setEmoji = function(emoji) {
  const profile = getProfile();
  profile.emoji = emoji;
  saveProfile(profile);
  renderProfileModal();
};
 
window.removeFromWishlist = function(id) {
  const profile = getProfile();
  profile.wishlist = profile.wishlist.filter(w => w.id !== id);
  saveProfile(profile);
  renderProfileModal();
};
 
window.saveSettings = function() {
  const profile = getProfile();
  profile.name  = document.getElementById("settingsName").value.trim() || profile.name;
  profile.email = document.getElementById("settingsEmail").value.trim();
  saveProfile(profile);
  renderProfileModal();
 
  // Quick toast
  showToast("Settings saved! 💾");
};
 
window.clearAllData = function() {
  if (confirm("Clear all profile data? This cannot be undone!")) {
    localStorage.removeItem("ttp_profile");
    renderProfileModal();
    showToast("Data cleared 🗑️");
  }
};
 
// Add to wishlist — movie card-lara ♡ buttonu elave etmek isteyirsense
// buildMovieCard funksiyasinda card-btn-den sonra bu HTML-i elave et:
// <button class="wishlist-heart" data-id="${movie.id}" title="Add to wishlist">♡</button>
// ve asagidaki kodu cagirir:
function addToWishlist(movieId) {
  const movie = MOVIES.find(m => m.id === movieId);
  if (!movie) return;
  const profile = getProfile();
  if (!profile.wishlist.find(w => w.id === movieId)) {
    profile.wishlist.push({ id: movie.id, title: movie.title, emoji: movie.posterEmoji });
    saveProfile(profile);
    showToast(`${movie.posterEmoji} Added to wishlist!`);
  } else {
    showToast("Already in your wishlist 💕");
  }
}
 
 
// ── PAYMENT MODAL ─────────────────────────────────────────────────────────────
 
// Bu funksiyon app.js-deki renderStep4-un icinde cagirilir.
// renderStep4-dakı "step4Done" buttonunun yerine asagidaki kodu islet:
//
//   el.querySelector("#step4Done").addEventListener("click", () => {
//     closeBookingModal();
//     openPaymentModal();          // <-- bunu elave et
//   });
 
function openPaymentModal(overrideBooking) {
  const booking = overrideBooking || bookingState;
  renderPaymentModal(booking);
  document.getElementById("paymentModal").classList.add("open");
}
 
function renderPaymentModal(booking) {
  const el = document.getElementById("paymentContent");
  const total = (booking.quantity * 14.50).toFixed(2);
  const fee   = (booking.quantity * 0.50).toFixed(2);
  const sub   = (booking.quantity * 14.00).toFixed(2);
 
  el.innerHTML = `
    <div class="payment-title">Checkout 💳</div>
    <div class="modal-step-label" style="margin-bottom:16px">Secure payment — your details are safe 🔒</div>
 
    <!-- Order Summary -->
    <div class="order-summary">
      <h4>Order Summary</h4>
      <div class="order-line">
        <span>${booking.movie.title} × ${booking.quantity} ticket${booking.quantity>1?"s":""}</span>
        <span>£${sub}</span>
      </div>
      <div class="order-line">
        <span>Booking fee</span>
        <span>£${fee}</span>
      </div>
      <div class="order-line">
        <span style="font-size:13px;opacity:.7">${booking.cinema.name}</span>
        <span style="font-size:13px;opacity:.7">${booking.showtime}</span>
      </div>
      <div class="order-total">
        <span>Total</span>
        <span>£${total}</span>
      </div>
    </div>
 
    <!-- Payment Method -->
    <div class="pay-methods">
      <button class="pay-method-btn active" data-method="card" id="payCard">💳 Card</button>
      <button class="pay-method-btn" data-method="apple" id="payApple">🍎 Apple Pay</button>
      <button class="pay-method-btn" data-method="google" id="payGoogle">🔵 Google Pay</button>
    </div>
 
    <!-- Card Form -->
    <div id="cardForm">
      <div class="payment-form">
        <div class="form-group">
          <label class="form-label">Name on card</label>
          <input class="form-input" id="cardName" placeholder="Jane & John Doe" autocomplete="cc-name" />
          <span class="form-error" id="errName">Please enter the cardholder name</span>
        </div>
 
        <div class="form-group">
          <label class="form-label">Card number</label>
          <div class="card-input-wrap">
            <input class="form-input" id="cardNumber" placeholder="1234  5678  9012  3456"
              maxlength="19" autocomplete="cc-number" style="padding-right:48px" />
            <span class="card-brand-icon" id="cardBrandIcon">💳</span>
          </div>
          <span class="form-error" id="errNumber">Please enter a valid 16-digit card number</span>
        </div>
 
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Expiry</label>
            <input class="form-input" id="cardExpiry" placeholder="MM / YY" maxlength="7" autocomplete="cc-exp" />
            <span class="form-error" id="errExpiry">Invalid expiry date</span>
          </div>
          <div class="form-group">
            <label class="form-label">CVV</label>
            <input class="form-input" id="cardCVV" placeholder="•••" maxlength="4" autocomplete="cc-csc" type="password" />
            <span class="form-error" id="errCVV">Invalid CVV</span>
          </div>
        </div>
      </div>
    </div>
 
    <!-- Alt-pay placeholder -->
    <div id="altPayForm" style="display:none;text-align:center;padding:20px;background:var(--cream);border:2px dashed var(--ink);border-radius:var(--radius);margin:12px 0">
      <span style="font-size:40px" id="altPayIcon"></span>
      <p style="font-family:var(--font-note);margin-top:10px;font-size:15px" id="altPayText"></p>
    </div>
 
    <!-- Processing -->
    <div class="payment-processing" id="payProcessing">
      <div class="spinner"></div>
      <p>Processing your payment... 💳</p>
    </div>
 
    <!-- Success -->
    <div class="payment-success" id="paySuccess">
      <div class="success-circle">✓</div>
      <h3>You're all set!</h3>
      <p>Enjoy the film together 💕</p>
      <div class="ticket-visual" id="ticketVisual">
        <p><strong>${booking.movie.posterEmoji} ${booking.movie.title}</strong></p>
        <p>📍 ${booking.cinema.name}</p>
        <p>🕐 ${booking.showtime} · 🎟️ ${booking.quantity} tickets</p>
        <p style="margin-top:8px;font-size:18px;font-family:var(--font-hand);font-weight:700">£${total} paid ✓</p>
      </div>
      <button class="btn-primary" style="margin-top:16px" onclick="document.getElementById('paymentModal').classList.remove('open')">
        Back to films 🎬
      </button>
    </div>
 
    <!-- Pay Button -->
    <div id="payBtnWrap">
      <button class="btn-primary" style="width:100%;margin-top:8px;font-size:20px" id="payNowBtn">
        Pay £${total} 💳
      </button>
    </div>
  `;
 
  // Payment method switching
  el.querySelectorAll(".pay-method-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      el.querySelectorAll(".pay-method-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const method = btn.dataset.method;
 
      if (method === "card") {
        el.querySelector("#cardForm").style.display = "block";
        el.querySelector("#altPayForm").style.display = "none";
        el.querySelector("#payNowBtn").textContent = `Pay £${total} 💳`;
      } else {
        el.querySelector("#cardForm").style.display = "none";
        el.querySelector("#altPayForm").style.display = "block";
        el.querySelector("#altPayIcon").textContent = method === "apple" ? "🍎" : "🔵";
        el.querySelector("#altPayText").textContent = method === "apple"
          ? "You'll be redirected to Apple Pay to complete payment."
          : "You'll be redirected to Google Pay to complete payment.";
        el.querySelector("#payNowBtn").textContent = `Pay £${total} ${method === "apple" ? "🍎" : "🔵"}`;
      }
    });
  });
 
  // Card number formatting
  el.querySelector("#cardNumber").addEventListener("input", (e) => {
    let v = e.target.value.replace(/\D/g, "").substring(0, 16);
    e.target.value = v.replace(/(.{4})/g, "$1  ").trim();
    // Brand icon
    const icon = el.querySelector("#cardBrandIcon");
    if (v.startsWith("4"))      icon.textContent = "💙"; // Visa
    else if (v.startsWith("5")) icon.textContent = "🟠"; // MC
    else if (v.startsWith("3")) icon.textContent = "🟢"; // Amex
    else icon.textContent = "💳";
  });
 
  // Expiry formatting
  el.querySelector("#cardExpiry").addEventListener("input", (e) => {
    let v = e.target.value.replace(/\D/g, "").substring(0, 4);
    if (v.length >= 3) v = v.substring(0,2) + " / " + v.substring(2);
    e.target.value = v;
  });
 
  // Pay button
  el.querySelector("#payNowBtn").addEventListener("click", () => {
    const method = el.querySelector(".pay-method-btn.active").dataset.method;
 
    if (method === "card" && !validateCardForm(el)) return;
 
    // Show processing
    el.querySelector("#payBtnWrap").style.display = "none";
    el.querySelector("#cardForm").style.display = "none";
    el.querySelector("#altPayForm").style.display = "none";
    el.querySelector("#payProcessing").style.display = "block";
 
    setTimeout(() => {
      el.querySelector("#payProcessing").style.display = "none";
      el.querySelector("#paySuccess").style.display = "block";
 
      // Save to history
      addBookingToHistory(booking);
    }, 2200);
  });
}
 
function validateCardForm(el) {
  let valid = true;
 
  const name   = el.querySelector("#cardName").value.trim();
  const number = el.querySelector("#cardNumber").value.replace(/\s/g, "");
  const expiry = el.querySelector("#cardExpiry").value;
  const cvv    = el.querySelector("#cardCVV").value;
 
  function setErr(id, show) {
    const errEl = el.querySelector(`#${id}`);
    if (errEl) errEl.style.display = show ? "block" : "none";
    const inputId = id.replace("err","card").charAt(0).toLowerCase() + id.replace("err","card").slice(1);
    // highlight input
    const inp = el.querySelector(`#card${id.replace("err","")}`);
    if (inp) inp.classList.toggle("error", show);
  }
 
  if (!name) { setErr("errName", true); valid = false; } else { setErr("errName", false); }
  if (number.length !== 16) { setErr("errNumber", true); valid = false; } else { setErr("errNumber", false); }
 
  const expiryClean = expiry.replace(/\s/g,"");
  if (!expiryClean.match(/^\d{2}\/\d{2}$/)) { setErr("errExpiry", true); valid = false; } else { setErr("errExpiry", false); }
  if (!cvv.match(/^\d{3,4}$/)) { setErr("errCVV", true); valid = false; } else { setErr("errCVV", false); }
 
  return valid;
}
 
 
// ── TOAST NOTIFICATION ────────────────────────────────────────────────────────
 
function showToast(msg) {
  let toast = document.getElementById("ttp-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "ttp-toast";
    toast.style.cssText = `
      position:fixed; bottom:28px; left:50%; transform:translateX(-50%) translateY(80px);
      background:var(--ink); color:var(--cream); font-family:var(--font-hand);
      font-size:17px; padding:12px 26px; border-radius:50px;
      box-shadow:4px 4px 0 rgba(0,0,0,.3); z-index:9999;
      transition: transform .3s cubic-bezier(.175,.885,.32,1.275), opacity .3s;
      opacity:0; pointer-events:none; white-space:nowrap;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.transform = "translateX(-50%) translateY(0)";
  toast.style.opacity = "1";
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.transform = "translateX(-50%) translateY(80px)";
    toast.style.opacity = "0";
  }, 2500);
}
 
 
// ── STEP 4 OVERRIDE — payment-a bagla ─────────────────────────────────────────
// app.js-deki renderStep4 funksiyasini tap ve
// step4Done buttonu addEventListener-ini bele deyis:
//
//   el.querySelector("#step4Done").addEventListener("click", () => {
//     closeBookingModal();
//     openPaymentModal();
//   });
//
// Bunun yerine yeni bir renderStep4 yazib kohneyi evez ede bilersen:
 
function renderStep4_withPayment(el, movie, qty, cinema, showtime) {
  const totalPrice = (qty * 14.50).toFixed(2);
  const oddOnes = qty % 2 !== 0
    ? `<p style="font-family:var(--font-note);font-size:14px;color:var(--ink-light);margin-top:8px">🚲 We'll find a match for your solo friend!</p>`
    : "";
 
  el.innerHTML = `
    <div style="text-align:center">
      <div style="font-size:56px;margin-bottom:8px">🎟️</div>
      <div class="modal-movie-title">${movie.title}</div>
      <div class="modal-step-label" style="margin:8px 0 16px">Almost there!</div>
    </div>
 
    <div class="booking-confirm">
      <p>📍 <strong>${cinema.name}</strong></p>
      <p style="margin-top:6px">🌍 ${cinema.location}</p>
      <p style="margin-top:6px">🕐 ${showtime}</p>
      <p style="margin-top:6px">🎟️ ${qty} ticket${qty>1?"s":""}</p>
      <p style="margin-top:10px;font-size:22px;font-family:var(--font-hand);font-weight:700">£${totalPrice}</p>
      ${oddOnes}
    </div>
 
    ${cinema.far ? `
    <div class="travel-notice" style="display:block">
      <h4>✈️ Don't forget your travel!</h4>
      <p>This cinema is far away — book your trip too!</p>
      <div class="travel-links">
        <a class="travel-link" href="https://www.booking.com" target="_blank">🏨 Hotels</a>
        <a class="travel-link" href="https://www.skyscanner.com" target="_blank">✈️ Flights</a>
      </div>
    </div>` : ""}
 
    <div class="modal-actions">
      <button class="btn-secondary" id="step4Reset">← Change</button>
      <button class="btn-primary" id="step4Pay">Pay £${totalPrice} 💳</button>
    </div>
  `;
 
  el.querySelector("#step4Reset").addEventListener("click", () => {
    bookingState.step = 1;
    bookingState.cinema = null;
    bookingState.showtime = null;
    renderBookingStep();
  });
 
  el.querySelector("#step4Pay").addEventListener("click", () => {
    closeBookingModal();
    openPaymentModal(bookingState);
  });
}