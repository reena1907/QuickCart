const products = [
  { name: "Wireless Headphones", price: 999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMNb7V-4IN54n3JNnX3ElVo7PvccntD16Qg&s"},
  { name: "Smartphone", price: 7999, image: "https://m.media-amazon.com/images/I/716ZX+vX7uL._UF350,350_QL50_.jpg" },
  { name: "Coffee Mug", price: 299, image: "https://m.media-amazon.com/images/I/71yXWbEd7SL.jpg" },
  { name: "Gaming Mouse", price: 1499, image: "https://m.media-amazon.com/images/I/61RYwHoeHjL._UF1000,1000_QL80_.jpg" },
  { name: "Bluetooth Speaker", price: 1999, image: "https://m.media-amazon.com/images/I/61T4l1ofW0L.jpg" }
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