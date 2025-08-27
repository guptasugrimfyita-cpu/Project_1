document.addEventListener("DOMContentLoaded", () => {
  const reviewForm = document.getElementById("reviewForm");
  const reviewsList = document.getElementById("reviewsList");

  if (reviewForm && reviewsList) {
    let selectedRating = 0;
    const stars = Array.from(reviewForm.querySelectorAll(".star"));
    const chosen = reviewForm.querySelector(".chosen");

    // ⭐ handle star click
    stars.forEach(star => {
      star.addEventListener("click", () => {
        selectedRating = parseInt(star.dataset.value, 10);
        updateStarVisuals(selectedRating, stars);
        chosen.textContent = `${selectedRating} star${selectedRating > 1 ? "s" : ""}`;
      });
    });

    // 📋 load existing reviews
    loadReviews(reviewsList);

    // 📤 form submit
    reviewForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = reviewForm.name.value.trim();
      const email = reviewForm.email.value.trim();
      const text = reviewForm.review.value.trim();

      if (!name || !email || !text || selectedRating === 0) {
        alert("Please fill all fields and select a rating.");
        return;
      }

      const review = {
        name,
        email,
        rating: selectedRating,
        text,
        date: new Date().toLocaleString()
      };

      saveReview(review);
      loadReviews(reviewsList);
      reviewForm.reset();
      updateStarVisuals(0, stars);
      chosen.textContent = "";
      selectedRating = 0;
    });
  }
});

// ⭐ update stars UI
function updateStarVisuals(rating, stars) {
  stars.forEach((s, i) => {
    if (i < rating) {
      s.classList.add("selected");
    } else {
      s.classList.remove("selected");
    }
  });
}

// 📥 load reviews from localStorage
function loadReviews(listEl) {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  listEl.innerHTML = "";
  if (reviews.length === 0) {
    listEl.innerHTML = "<li class='text-gray-500'>No reviews yet. Be the first!</li>";
  } else {
    reviews.forEach(r => {
      const li = document.createElement("li");
      li.className = "p-3 border-b";
      li.innerHTML = `<strong>${r.name}</strong> (${r.rating}⭐) <em class="text-sm text-gray-500">${r.date}</em><br>${r.text}`;
      listEl.appendChild(li);
    });
  }
}

// 💾 save review in localStorage
function saveReview(review) {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.push(review);
  localStorage.setItem("reviews", JSON.stringify(reviews));
}
