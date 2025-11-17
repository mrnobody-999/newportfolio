function showProject(title) {
  let descriptions = {
    "Hacker Terminal Simulator": "This project simulates a hacker terminal with fake commands and green glowing text. Built with HTML, CSS, and JS.",
    "AI Assistant": "A simple chatbot that can answer basic questions, tell jokes, and interact with users using JavaScript.",
    "Portfolio Website": "A responsive, dark-themed portfolio website with animations, sections for projects, and contact form."
  };

  document.getElementById("popupTitle").innerText = title;
  document.getElementById("popupDescription").innerText = descriptions[title];
  document.getElementById("projectPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("projectPopup").style.display = "none";
}
