const root = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeLabel = themeToggle?.querySelector(".theme-toggle-label");

function applyTheme(theme) {
  const resolvedTheme = theme === "dark" ? "dark" : "light";
  root.setAttribute("data-theme", resolvedTheme);
  localStorage.setItem("portfolio-theme", resolvedTheme);

  if (!themeToggle || !themeLabel) return;

  const isDark = resolvedTheme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
}

if (themeToggle) {
  applyTheme(root.getAttribute("data-theme"));
  themeToggle.addEventListener("click", () => {
    applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });
}

document.addEventListener("click", (event) => {
  const button = event.target.closest(".js-confirm");
  if (!button) return;

  const message = button.getAttribute("data-confirm") || "Are you sure?";
  if (!window.confirm(message)) {
    event.preventDefault();
    event.stopPropagation();
  }
});

(() => {
  const form = document.getElementById("filtersForm");
  if (!form || form.getAttribute("data-live") !== "true") return;

  const searchInput = form.querySelector('input[name="q"]');
  const selects = form.querySelectorAll("select");
  let timer = null;

  function submitLive() {
    let pageInput = form.querySelector('input[name="page"]');
    if (!pageInput) {
      pageInput = document.createElement("input");
      pageInput.type = "hidden";
      pageInput.name = "page";
      form.appendChild(pageInput);
    }
    pageInput.value = "1";
    form.requestSubmit();
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      clearTimeout(timer);
      timer = window.setTimeout(submitLive, 300);
    });
  }

  selects.forEach((select) => {
    select.addEventListener("change", submitLive);
  });
})();
