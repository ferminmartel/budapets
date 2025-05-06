// Música de fondo al 50% de volumen
const music = document.getElementById("bg-music");
music.volume = 0.5;

// Mostrar sección
function showInfo(id) {
  const infoBox = document.getElementById("info-box");
  const allSections = document.querySelectorAll(".info-section");

  infoBox.classList.remove("hidden");

  allSections.forEach((section) => {
    section.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
  }
}

// Ocultar sección
function goBack() {
  const infoBox = document.getElementById("info-box");
  const allSections = document.querySelectorAll(".info-section");

  infoBox.classList.add("hidden");

  allSections.forEach((section) => {
    section.classList.remove("active");
  });
}

// Loop ping-pong para el video de fondo
const video = document.getElementById("background-video");
let reverse = false;

video.addEventListener("timeupdate", () => {
  if (!reverse && video.currentTime >= video.duration - 0.1) {
    reverse = true;
  } else if (reverse && video.currentTime <= 0.1) {
    reverse = false;
  }
});

setInterval(() => {
  if (reverse) {
    video.currentTime -= 0.04;
  }
}, 40);
