import "./index.css";

// Navigace "hamburger" menu pro mobilní zařízení
document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.getElementById("navMenu");
  const hamburgerBtn = document.getElementById("hamburgerBtn");

  hamburgerBtn.addEventListener("click", function () {
    if (navMenu.classList.contains("hidden")) {
      gsap.to(navMenu, {
        autoAlpha: 1,
        duration: 0.3,
        onStart: function () {
          navMenu.classList.remove("hidden");
        },
      });
    } else {
      gsap.to(navMenu, {
        autoAlpha: 0,
        duration: 0.3,
        onComplete: function () {
          navMenu.classList.add("hidden");
        },
      });
    }
  });
});
