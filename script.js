function showInfo(sectionId) {
  document.querySelectorAll('.info-section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById('info-box').classList.remove('hidden');
  document.getElementById(sectionId).style.display = 'block';
}

function goBack() {
  document.getElementById('info-box').classList.add('hidden');
  document.querySelectorAll('.info-section').forEach(section => {
    section.style.display = 'none';
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bg-music');
  if (music) {
    music.volume = 0.2;
    music.play().catch(() => {
      // user interaction might be needed
    });
  }
});
