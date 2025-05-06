function showSection(sectionId) {
  document.getElementById("sectionContainer").classList.remove("hidden");

  const sections = document.querySelectorAll(".section-content");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  document.getElementById(sectionId).style.display = "block";
}

function goBack() {
  document.getElementById("sectionContainer").classList.add("hidden");
}
