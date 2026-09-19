/* TradingLab — interactividad mínima */
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".nav-toggle");
  const navList = document.getElementById("nav-list");
  if (toggle && navList) {
    toggle.addEventListener("click", () => {
      const open = navList.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });
    navList.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        navList.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});
