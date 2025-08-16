document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar TODOS los carruseles
  const carousels = document.querySelectorAll(".carousel");

  // Inicializar cada carrusel
  carousels.forEach((carousel) => {
    const inner = carousel.querySelector(".carousel-inner");
    const items = carousel.querySelectorAll(".carousel-item");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    const indicators = carousel.querySelectorAll(".indicator");

    let currentIndex = 0;
    const totalItems = items.length;

    // Función de actualización (privada para este carrusel)
    function updateCarousel() {
      inner.style.transform = `translateX(-${currentIndex * 100}%)`;

      indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
      });
    }

    // Eventos específicos para este carrusel
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateCarousel();
    });

    indicators.forEach((indicator) => {
      indicator.addEventListener("click", function () {
        currentIndex = parseInt(this.getAttribute("data-slide-to"));
        updateCarousel();
      });
    });
  });
});
