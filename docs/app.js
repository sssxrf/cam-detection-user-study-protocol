(function () {
  const button = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#nav-menu");

  if (!button || !menu) {
    return;
  }

  button.addEventListener("click", function () {
    const isOpen = menu.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  menu.addEventListener("click", function (event) {
    if (event.target.tagName === "A" && menu.classList.contains("is-open")) {
      menu.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
    }
  });
})();
