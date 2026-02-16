(function () {
  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", !open);
      links.classList.toggle("is-open", !open);
    });
  }

  // Optional: update these with your real URLs before publishing
  // document.querySelector("#linkedin-link").href = "https://linkedin.com/in/yourprofile";
  // document.querySelector("#portfolio-link").href = "https://yoursite.com";
})();
