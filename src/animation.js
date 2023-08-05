// Animace pro obrázky našich služeb

var animation1 = bodymovin.loadAnimation({
  container: document.getElementById("lottie-animation1"), // ID of div in which to embed animation
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./src/assets/animation1.json",
  rendererSettings: {
    preserveAspectRatio: "none",
  },
  height: 512,
});

var animation2 = bodymovin.loadAnimation({
  container: document.getElementById("lottie-animation2"), // ID of div in which to embed animation
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./src/assets/animation2.json", // the path to your second animation json
});

var animation3 = bodymovin.loadAnimation({
  container: document.getElementById("lottie-animation3"), // ID of div in which to embed animation
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./src/assets/animation3.json", // the path to your third animation json
});
