// script.js

function showInfo(id) {
  const infoBox = document.getElementById("info-box");
  const sections = document.querySelectorAll(".info-section");

  infoBox.classList.remove("hidden");
  sections.forEach((section) => {
    section.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

function goBack() {
  const infoBox = document.getElementById("info-box");
  const sections = document.querySelectorAll(".info-section");

  infoBox.classList.add("hidden");
  sections.forEach((section) => {
    section.style.display = "none";
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  music.volume = 0.2;
  music.play().catch((err) => {
    console.warn("Auto-play might be blocked:", err);
  });

  const video = document.getElementById("background-video");
  let reverse = false;

  const pingPong = () => {
    if (reverse) {
      video.playbackRate = -1;
      video.currentTime = video.duration - 0.01;
    } else {
      video.playbackRate = 1;
      video.currentTime = 0.01;
    }
    video.play();
  };

  video.addEventListener("ended", () => {
    reverse = !reverse;
    pingPong();
  });

  pingPong();
});
