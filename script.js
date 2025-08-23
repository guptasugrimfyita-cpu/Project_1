document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("offerModal");
  const closeBtn = document.getElementById("closeModal");

  // Agar modal hai tabhi run kare (taaki about.html pe error na aaye)
  if (modal && closeBtn) {
    // Show popup on page load
    modal.style.display = "flex";

    // Close when clicking on ❌ button
    closeBtn.onclick = () => {
      modal.style.display = "none";
    };

    // Close when clicking outside modal box
    window.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };
  }
});
