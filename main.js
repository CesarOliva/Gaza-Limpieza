document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const inner = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".carousel-item");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const indicators = document.querySelectorAll(".indicator");

  let currentIndex = 0;
  const totalItems = items.length;

  function updateCarousel() {
    inner.style.transform = `translateX(-${currentIndex * 100}%)`;

    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  indicators.forEach((indicator) => {
    indicator.addEventListener("click", function () {
      currentIndex = parseInt(this.getAttribute("data-slide-to"));
      updateCarousel();
    });
  });
});
