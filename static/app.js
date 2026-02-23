// Delete confirmation
document.addEventListener("click", (e) => {
    const btn = e.target.closest(".js-confirm");
    if (!btn) return;
    const msg = btn.getAttribute("data-confirm") || "Are you sure?";
    if (!window.confirm(msg)) {
      e.preventDefault();
      e.stopPropagation();
    }
  });