(function () {
  document.querySelectorAll("[data-carousel]").forEach(function (root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll(".carousel-slide"));
    if (slides.length < 2) return; // nothing to rotate

    var counter = root.querySelector("[data-carousel-index]");
    var current = 0;

    function show(index) {
      slides[current].hidden = true;
      current = (index + slides.length) % slides.length;
      slides[current].hidden = false;
      if (counter) counter.textContent = current + 1;
    }

    root.querySelector(".carousel-prev").addEventListener("click", function () {
      show(current - 1);
    });
    root.querySelector(".carousel-next").addEventListener("click", function () {
      show(current + 1);
    });
  });
})();
