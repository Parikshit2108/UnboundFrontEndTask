const carousel = document.querySelector(".carousel");
let position = 0;

function nextSlide() {
  position -= 100;
  if (position < -100) {
    position = 0;
  }
  carousel.style.transform = `translateX(${position}%)`;
}
