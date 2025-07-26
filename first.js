const products = [
  { name: "Wireless Headphones", price: 999, image: "airpods.jpg" },
  { name: "Smartphone", price: 7999, image: "phone.jpg" },
  { name: "Coffee Mug", price: 299, image: "coffeemug.jpg" },
  { name: "Gaming Mouse", price: 1499, image: "mouse.jpg" },
  { name: "Bluetooth Speaker", price: 1999, image: "bluetooth.jpg" }
];

function displayProducts(list) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
      </div>`;
  });
}

function sortProducts() {
  const sortValue = document.getElementById("sort").value;
  let sorted = [...products];
  if (sortValue === "low-high") sorted.sort((a, b) => a.price - b.price);
  if (sortValue === "high-low") sorted.sort((a, b) => b.price - a.price);
  displayProducts(sorted);
}

window.onload = () => displayProducts(products);