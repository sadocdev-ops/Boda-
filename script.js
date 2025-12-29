/* =========================
   FIX ALTURA REAL MÓVIL
========================= */
function setRealVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setRealVH();
window.addEventListener('resize', setRealVH);

/* =========================
   CONTADOR
========================= */
const targetDate = new Date("2026-02-14T18:00:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) return;

  document.getElementById("days").textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("hours").textContent = Math.floor((diff / (1000 * 60 * 60)) % 24);
  document.getElementById("minutes").textContent = Math.floor((diff / (1000 * 60)) % 60);
  document.getElementById("seconds").textContent = Math.floor((diff / 1000) % 60);
}
setInterval(updateCountdown, 1000);
updateCountdown();

/* =========================
   TEXTO SECUENCIAL
========================= */
const steps = [
  { title: "¡Nos Casamos! 💍", text: "Queremos compartir este momento contigo" },
  { title: "Con mucha alegría 💒", text: "Te invitamos a celebrar nuestro amor" },
  { title: "Muy pronto…", text: "Será un día inolvidable ❤️" }
];

let index = 0;
const title = document.getElementById("title");
const text = document.getElementById("text");
const button = document.getElementById("action");

function showStep() {
  title.style.opacity = 0;
  text.style.opacity = 0;

  setTimeout(() => {
    title.textContent = steps[index].title;
    text.textContent = steps[index].text;
    title.style.opacity = 1;
    text.style.opacity = 1;

    createEffect();
    index = (index + 1) % steps.length;
  }, 300);
}

button.addEventListener("click", showStep);
showStep();

/* =========================
   EFECTOS 🎈❤️
========================= */
function createEffect() {
  const emojis = ["🎈", "❤️", "💍", "💒"];
  const span = document.createElement("span");
  span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  span.style.left = Math.random() * 100 + "vw";
  document.getElementById("effects").appendChild(span);

  setTimeout(() => span.remove(), 4000);
}
