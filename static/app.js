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

  // Live filter/search 
(() => {
    const form = document.getElementById("filtersForm");
    if (!form || form.getAttribute("data-live") !== "true") return;
  
    const searchInput = form.querySelector('input[name="q"]');
    const selects = form.querySelectorAll("select");
  
    let timer = null;
  
    function submitLive() {
      // Reset to page 1 when filters change to avoid blank pages
      const pageInput = form.querySelector('input[name="page"]');
      if (pageInput) pageInput.value = "1";
  
      // If page is in URL but not a form field, append a hidden page=1
      // (Safe to do once)
      let hidden = form.querySelector('input[name="page"][type="hidden"]');
      if (!hidden) {
        hidden = document.createElement("input");
        hidden.type = "hidden";
        hidden.name = "page";
        hidden.value = "1";
        form.appendChild(hidden);
      } else {
        hidden.value = "1";
      }
  
      form.requestSubmit();
    }
  
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        clearTimeout(timer);
        timer = setTimeout(submitLive, 300);
      });
    }
  
    selects.forEach((sel) => {
      sel.addEventListener("change", submitLive);
    });
  })();