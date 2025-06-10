document.querySelectorAll("details").forEach((details) => {
  const summary = details.querySelector("summary");
  if (summary) {
    // Set initial state
    summary.setAttribute("aria-expanded", details.open ? "true" : "false");

    // Listen for toggle event
    details.addEventListener("toggle", () => {
      summary.setAttribute("aria-expanded", details.open ? "true" : "false");
    });
  }
});
