import "./index.css";

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const burgerMenu = document.getElementById("burgerMenu");
  const closeBtn = document.getElementById("closeBtn");

  // Kliknutí na tlačítko otevře/zavře burgermenu
  hamburgerBtn.addEventListener("click", function () {
    burgerMenu.classList.toggle("hidden");
  });

  // Kliknutí na tlačítko "Zavřít" skryje burgermenu
  closeBtn.addEventListener("click", function () {
    burgerMenu.classList.add("hidden");
  });
});
