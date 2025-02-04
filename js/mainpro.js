const menuIcon = document.querySelector(".menu-icon");
const backdrop = document.querySelector(".backdrop");
const navLinks = document.querySelector(".nav-links");
const closeIcon = document.querySelector(".close-icon");

menuIcon.addEventListener("click", () => {
  backdrop.classList.add("active");
  navLinks.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  backdrop.classList.remove("active");
  navLinks.classList.remove("active");
});

backdrop.addEventListener("click", () => {
  backdrop.classList.remove("active");
  navLinks.classList.remove("active");
});
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  let scrollAmount = 0;
  const cardsToShow = 4; // Number of cards to show at once
  const cardWidth = carousel.querySelector(".product1").offsetWidth + 15; // Card width + gap
  const totalWidth = cardWidth * cardsToShow; // Total width to move the carousel

  const scrollMax = carousel.scrollWidth - carousel.clientWidth;

  function autoSlide() {
      if (scrollAmount >= scrollMax) {
          scrollAmount = 0; // Reset to start
      } else {
          scrollAmount += totalWidth;
      }

      carousel.style.transform = `translateX(-${scrollAmount}px)`; // Shift the carousel
  }

  setInterval(autoSlide, 5000); // Slide every 5 seconds
});
