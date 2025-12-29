/* ======================
   PRELOAD IMÁGENES
====================== */
const backgrounds = [
  "./img1.jpeg",
  "./img2.jpeg",
  "./img3.jpeg",
  "./img4.jpeg",
  "./img5.jpeg"
];

const loadedImages = [];
let loadedCount = 0;

backgrounds.forEach(src => {
  const img = new Image();
  img.src = src;
  img.onload = () => loadedCount++;
  loadedImages.push(img);
});

/* ======================
   FONDOS CON CROSSFADE
====================== */
const bgA = document.querySelector(".bg-a");
const bgB = document.querySelector(".bg-b");
let activeBg = bgA;
let inactiveBg = bgB;

bgA.style.backgroundImage = `url(${backgrounds[0]})`;
bgA.classList.add("active");

function changeBackground(index) {
  if (!loadedImages[index]) return;

  inactiveBg.style.backgroundImage = `url(${backgrounds[index]})`;

  requestAnimationFrame(() => {
    inactiveBg.classList.add("active");
    activeBg.classList.remove("active");
    [activeBg, inactiveBg] = [inactiveBg, activeBg];
  });
}

/* ======================
   MUSICA
====================== */
let musicStarted = false;
const music = document.getElementById("music");

document.addEventListener("click", () => {
  if (!musicStarted) {
    musicStarted = true;
    music.volume = 0.4;
    music.play().catch(() => {});
  }
}, { once: true });

/* ======================
   HISTORIA
====================== */
const steps = [
  { title: "", text: "Hay momentos que cambian todo 💍" },
  { title: "Danixa & Ernesto", text: "Dos historias, un mismo camino" },
  { title: "Nos Casamos 💒", text: "Y queremos que seas parte" },
  { title: "28 · Febrero · 2026", text: "📍 KAWIÑ · ⏰ 15:00 HRS" },
  { title: "¿Nos acompañas?", text: "Con amor y fe, te esperamos" }
];

let current = 0;

const title = document.getElementById("title");
const text = document.getElementById("text");
const button = document.getElementById("action");

function renderStep() {
  title.style.opacity = 0;
  text.style.opacity = 0;

  setTimeout(() => {
    title.textContent = steps[current].title || "\u00A0";
    text.textContent = steps[current].text;
    title.style.opacity = 1;
    text.style.opacity = 1;
  }, 250);

  changeBackground(current);

  if (current === steps.length - 1) {
    button.textContent = "Confirmar asistencia 💬";
  }
}

renderStep();

/* ======================
   CLICK
====================== */
button.addEventListener("click", () => {
  if (current < steps.length - 1) {
    current++;
    renderStep();
  } else {
    window.open("https://ccgvcastro.my.canva.site/danixa-ernesto");
    button.textContent = "Confirmado ✓";
    button.disabled = true;
  }
});

/* ======================
   CONTADOR
====================== */
const weddingDate = new Date("2026-02-28T15:00:00").getTime();

setInterval(() => {
  const diff = weddingDate - Date.now();
  if (diff <= 0) return;

  days.textContent = Math.floor(diff / 86400000);
  hours.textContent = Math.floor((diff / 3600000) % 24);
  minutes.textContent = Math.floor((diff / 60000) % 60);
  seconds.textContent = Math.floor((diff / 1000) % 60);
}, 1000);
