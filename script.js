/* ========= IMÁGENES ========= */
const backgrounds = [
  "./img1.jpeg",
  "./img2.jpeg",
  "./img3.jpeg",
  "./img4.jpeg",
  "./img5.jpeg"
];

backgrounds.forEach(src => {
  const img = new Image();
  img.src = src;
});

/* ========= FONDOS ========= */
const bgA = document.querySelector(".bg-a");
const bgB = document.querySelector(".bg-b");
let activeBg = bgA;
let inactiveBg = bgB;

activeBg.style.backgroundImage = `url(${backgrounds[0]})`;

function changeBackground(i) {
  inactiveBg.style.backgroundImage = `url(${backgrounds[i]})`;
  inactiveBg.classList.add("active");
  activeBg.classList.remove("active");
  [activeBg, inactiveBg] = [inactiveBg, activeBg];
}

/* ========= MÚSICA ========= */
const music = document.getElementById("music");
let musicStarted = false;

document.addEventListener("click", () => {
  if (!musicStarted) {
    musicStarted = true;
    music.volume = 0.4;
    music.play().catch(()=>{});
  }
}, { once: true });

/* ========= HISTORIA ========= */
const steps = [
  { title: "", text: "Hay momentos que cambian todo 💍" },
  { title: "Danixa & Ernesto", text: "Dos historias, un mismo camino" },
  { title: "Nos Casamos 💒", text: "Y queremos que seas parte" },
  { title: "28 · Febrero · 2026", text: "📍 KAWIÑ · ⏰ 15:00 HRS" },
  { title: "¿Nos acompañas?", text: "Con la bendición de Dios y el amor que nos une" }
];

let current = 0;
const title = document.getElementById("title");
const text = document.getElementById("text");
const button = document.getElementById("action");
const effects = document.getElementById("effects");

function renderStep() {
  title.style.opacity = 0;
  text.style.opacity = 0;

  setTimeout(() => {
    title.textContent = steps[current].title || "\u00A0";
    text.textContent = steps[current].text;
    title.style.opacity = 1;
    text.style.opacity = 1;
  }, 200);

  changeBackground(current);

  if (current === steps.length - 1) {
    button.textContent = "Confirmar asistencia 💬";
  }
}

/* ========= EFECTOS ========= */
function lluvia() {
  const emojis = ["❤️", "💖", "🎈"];
  for (let i = 0; i < 18; i++) {
    const span = document.createElement("span");
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = 2 + Math.random() * 2 + "s";
    effects.appendChild(span);
    setTimeout(() => span.remove(), 4000);
  }
}

renderStep();

/* ========= CLICK ========= */
button.addEventListener("click", () => {
  lluvia();

  if (current < steps.length - 1) {
    current++;
    renderStep();
  } else {
    window.open("https://ccgvcastro.my.canva.site/danixa-ernesto");
    button.textContent = "Confirmado ✓";
    button.disabled = true;
  }
});

/* ========= CONTADOR ========= */
const weddingDate = new Date("2026-02-28T15:00:00").getTime();

setInterval(() => {
  const diff = weddingDate - Date.now();
  if (diff <= 0) return;

  days.textContent = Math.floor(diff / 86400000);
  hours.textContent = Math.floor((diff / 3600000) % 24);
  minutes.textContent = Math.floor((diff / 60000) % 60);
  seconds.textContent = Math.floor((diff / 1000) % 60);
}, 1000);
