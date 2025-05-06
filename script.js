document.addEventListener("DOMContentLoaded", () => {
  const infoBox = document.getElementById("info-box");
  const infoSections = document.querySelectorAll(".info-section");
  const volverButton = document.querySelector(".volver");
  const music = document.getElementById("bg-music");

  // Set music volume to 50%
  music.volume = 0.5;

  window.showInfo = (id) => {
    infoSections.forEach(section => {
      section.style.display = "none";
    });
    document.getElementById(id).style.display = "block";
    infoBox.classList.remove("hidden");
  };

  window.goBack = () => {
    infoBox.classList.add("hidden");
  };
});
