
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Chotu Gupta — Vegetables & Fruits</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/scrollreveal/4.0.9/scrollreveal.min.js"></script>
</head>
<body class="bg-green-50 text-gray-800">
  <!-- Navbar -->
  <header class="bg-green-700 text-white p-4 flex justify-between items-center sticky top-0 shadow z-50">
    <h1 class="text-2xl font-bold">Chotu Gupta</h1>
    <nav class="space-x-4">
      <a href="#products" class="hover:underline">Products</a>
      <a href="#order" class="hover:underline">Order</a>
      <a href="#contact" class="hover:underline">Contact</a>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="bg-green-100 p-8 text-center">
    <h2 class="text-3xl font-bold mb-4">Fresh Vegetables & Fruits Daily</h2>
    <p class="mb-4">Wholesaler & Retailer | Party Orders Accepted</p>
    <a href="https://wa.me/918286694381" class="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800">📲 Order on WhatsApp</a>
  </section>

  <!-- Products Section -->
  <section id="products" class="p-6">
    <h2 class="text-2xl font-semibold mb-4">Our Products</h2>
    <input type="text" id="searchBox" placeholder="Search products..." class="border p-2 rounded w-full mb-4">
    <div id="productList" class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="bg-white p-4 rounded shadow">🍅 Tomato - ₹40/kg</div>
      <div class="bg-white p-4 rounded shadow">🥔 Potato - ₹30/kg</div>
      <div class="bg-white p-4 rounded shadow">🧅 Onion - ₹35/kg</div>
      <div class="bg-white p-4 rounded shadow">🍌 Banana - ₹60/dozen</div>
      <div class="bg-white p-4 rounded shadow">🍎 Apple - ₹120/kg</div>
      <div class="bg-white p-4 rounded shadow">🥒 Cucumber - ₹50/kg</div>
    </div>
  </section>

  <!-- Order Form -->
  <section id="order" class="p-6 bg-green-100">
    <h2 class="text-2xl font-semibold mb-4">Place Your Order</h2>
    <form id="orderForm" class="space-y-4">
      <input type="text" placeholder="Your Name" class="border p-2 rounded w-full" required>
      <input type="text" placeholder="Your Phone Number" class="border p-2 rounded w-full" required>
      <textarea placeholder="Enter items & quantity (e.g., 2kg Tomato, 1 dozen Banana)" class="border p-2 rounded w-full" required></textarea>
      <select class="border p-2 rounded w-full">
        <option>Normal Order</option>
        <option>Party/Bulk Order</option>
      </select>
      <button type="submit" class="bg-green-700 text-white px-6 py-2 rounded-lg">Send on WhatsApp</button>
    </form>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="p-6">
    <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
    <p>📍 60 Feet Road, Nr. Bavan Jinalay Jain Temple, Bhayandar (W)</p>
    <p>📱 <a href="tel:+918286694381" class="text-green-700">8286694381</a></p>
    <iframe class="mt-4 w-full h-64 rounded" src="https://www.google.com/maps?q=60+Feet+Road,+Bhayandar+West&output=embed"></iframe>
  </section>

  <!-- Footer -->
  <footer class="bg-green-700 text-white text-center p-4 mt-6">
    &copy; 2025 Chotu Gupta | All rights reserved.
  </footer>

  <script>
    // Search filter for products
    document.getElementById("searchBox").addEventListener("input", function() {
      let filter = this.value.toLowerCase();
      let products = document.querySelectorAll("#productList div");
      products.forEach(p => {
        p.style.display = p.textContent.toLowerCase().includes(filter) ? "block" : "none";
      });
    });

    // WhatsApp order form handler
    document.getElementById("orderForm").addEventListener("submit", function(e) {
      e.preventDefault();
      let name = this[0].value;
      let phone = this[1].value;
      let items = this[2].value;
      let type = this[3].value;
      let message = `Hello, my name is ${name}.\nPhone: ${phone}\nOrder Type: ${type}\nItems: ${items}`;
      window.open(`https://wa.me/918286694381?text=${encodeURIComponent(message)}`, "_blank");
    });

    // Scroll reveal animations
    ScrollReveal().reveal('section', { distance: '50px', duration: 800, easing: 'ease-out', origin: 'bottom', interval: 100 });
  </script>
</body>
</html>

