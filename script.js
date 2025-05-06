// Música de fondo
const audio = new Audio("pepe.mp3");
audio.volume = 0.5;
audio.loop = true;
audio.play().catch(() => {
  // Algunos navegadores requieren interacción del usuario
  document.addEventListener("click", () => audio.play(), { once: true });
});

// Botones y textos
const sections = {
  quienes: "Somos un petshop premium con productos y servicios para tu mascota.",
  que: "Ofrecemos alimentos balanceados, peluquería canina y asesoramiento personalizado.",
  donde: "Estamos en AV. GAUSS 5308, Villa Belgrano, Córdoba. ¡Te esperamos!"
};

Object.entries(sections).forEach(([id, texto]) => {
  document.getElementById(id).addEventListener("click", () => {
    const textBox = document.getElementById("text-box");
    textBox.innerHTML = `
      <p>${texto}</p>
      ${
        id === "donde"
          ? '<a href="https://maps.app.goo.gl/GZ5T9399v75XBtFx6" target="_blank"><button>Ver en Google Maps</button></a>'
          : ""
      }
      <button onclick="cerrarTexto()">Volver</button>
    `;
    textBox.style.display = "block";
  });
});

function cerrarTexto() {
  document.getElementById("text-box").style.display = "none";
}

// Loop tipo ping-pong para video
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
