/* Site-wide behaviour. Each block no-ops if its markup isn't on the page. */
(function () {
  "use strict";

  /* Pinned header: flag it once the page has scrolled at all, so CSS can
     lift it off the content. */
  var header = document.querySelector(".site-header");
  if (header) {
    var ticking = false;
    var sync = function () {
      header.classList.toggle("is-stuck", window.scrollY > 4);
      ticking = false;
    };
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(sync);
        }
      },
      { passive: true }
    );
    sync();
  }

  /* Featured-project carousel. */
  document.querySelectorAll("[data-carousel]").forEach(function (root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll(".carousel-slide"));
    var prev = root.querySelector(".carousel-prev");
    var next = root.querySelector(".carousel-next");

    if (slides.length < 2) {
      if (prev) prev.hidden = true;
      if (next) next.hidden = true;
      return;
    }

    var counter = root.querySelector("[data-carousel-index]");
    var current = 0;

    function show(index) {
      slides[current].hidden = true;
      current = (index + slides.length) % slides.length;
      slides[current].hidden = false;
      if (counter) counter.textContent = current + 1;
    }

    prev.addEventListener("click", function () { show(current - 1); });
    next.addEventListener("click", function () { show(current + 1); });
  });
})();
