document.querySelectorAll(".number").forEach((num) => {
  let target = +num.getAttribute("data-target");
  let start = Math.floor(Math.random() * (target / 2)); // random start
  let current = start;

  let step = Math.ceil(target / 100); // speed of counting
  let interval = setInterval(() => {
    current += step;
    if (current >= target) {
      num.textContent = target.toLocaleString();
      clearInterval(interval);
    } else {
      num.textContent = current.toLocaleString();
    }
  }, 30);
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 3,
    gap: "20px",
    arrows: false,
    focus: "center",
    autoScroll: {
      speed: 0.5,
    },
  }).mount(window.splide.Extensions);
});
