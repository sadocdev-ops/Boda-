/* ===== FIX ALTURA REAL MÓVIL ===== */
function fixVH() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}
fixVH();
window.addEventListener('resize', fixVH);

/* ===== MÚSICA ===== */
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("music");
  music.volume = 0.4;
  music.play().catch(() => {
    document.addEventListener("click", () => music.play(), { once: true });
  });
});

/* ===== FONDOS ===== */
const images = ["img1.jpeg","img2.jpeg","img3.jpeg","img4.jpeg","img5.jpeg"];
let bgIndex = 0;
let showingA = true;

const bgA = document.querySelector(".bg-a");
const bgB = document.querySelector(".bg-b");

bgA.style.backgroundImage = `url(${images[0]})`;

function changeBackground() {
  const next = images[(bgIndex + 1) % images.length];
  const show = showingA ? bgB : bgA;
  const hide = showingA ? bgA : bgB;

  show.style.backgroundImage = `url(${next})`;
  show.style.opacity = 1;
  hide.style.opacity = 0;

  showingA = !showingA;
  bgIndex++;
}

/* ===== TEXTO ===== */
const steps = [
  { title: "Hay momentos que cambian todo 💍", text: "Hay instantes que marcan una historia" },
  { title: "Danixa & Ernesto", text: "Dos caminos, un mismo destino" },
  { title: "Nos Casamos 💒", text: "Y queremos que seas parte" },
  { title: "28 · Febrero · 2026", text: "📍 KAWIÑ · ⏰ 15:00 HRS" },
  { title: "¿Nos acompañas?", text: "Será un día inolvidable ❤️" }
];

let step = 0;
const title = document.getElementById("title");
const text = document.getElementById("text");
const button = document.getElementById("action");

function render() {
  title.style.opacity = 0;
  text.style.opacity = 0;

  setTimeout(() => {
    title.textContent = steps[step].title;
    text.textContent = steps[step].text;
    title.style.opacity = 1;
    text.style.opacity = 1;
    lluvia();
    changeBackground();
  }, 300);
}

render();

button.addEventListener("click", () => {
  if (step < steps.length - 1) {
    step++;
    render();
  } else {
    window.open("https://ccgvcastro.my.canva.site/danixa-ernesto");
    button.textContent = "Confirmado ✓";
    button.disabled = true;
  }
});

/* ===== EFECTOS 🎈❤️ ===== */
function lluvia() {
  const emojis = ["❤️","💖","🎈","💍","💒"];
  for (let i = 0; i < 18; i++) {
    const span = document.createElement("span");
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + "vw";
    document.getElementById("effects").appendChild(span);
    setTimeout(() => span.remove(), 4000);
  }
}

/* ===== CONTADOR ===== */
const weddingDate = new Date("2026-02-28T15:00:00").getTime();

setInterval(() => {
  const diff = weddingDate - Date.now();
  if (diff <= 0) return;

  days.textContent = Math.floor(diff / 86400000);
  hours.textContent = Math.floor(diff / 3600000) % 24;
  minutes.textContent = Math.floor(diff / 60000) % 60;
  seconds.textContent = Math.floor(diff / 1000) % 60;
}, 1000);
