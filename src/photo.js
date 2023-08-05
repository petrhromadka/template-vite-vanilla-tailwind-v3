// Animated Fotka
document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector("#my-wrapper");
  const image = document.querySelector("#my-svg");

  wrapper.addEventListener("mousemove", (e) => {
    const rect = wrapper.getBoundingClientRect();
    let x = e.clientX - (rect.left + Math.floor(rect.width / 2));
    let y = e.clientY - (rect.top + Math.floor(rect.height / 2));

    // Invert values
    x = x - x * 2;
    y = y - y * 2;

    image.style.transform = `translateX(${x / 2}px) translateY(${
      y / 2
    }px) scale(1.6)`;
  });

  wrapper.addEventListener("mouseleave", () => {
    image.style.transform = `translateX(0) translateY(0) scale(1)`;
  });
});
