// Sample products
const products = [
  { id: 1, name: "Smartphone", price: 15000, image: "https://via.placeholder.com/200x150?text=Smartphone" },
  { id: 2, name: "Headphones", price: 2000, image: "https://via.placeholder.com/200x150?text=Headphones" },
  { id: 3, name: "Laptop", price: 55000, image: "https://via.placeholder.com/200x150?text=Laptop" },
  { id: 4, name: "Smartwatch", price: 5000, image: "https://via.placeholder.com/200x150?text=Smartwatch" }
];

let cart = [];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

// Display products
function loadProducts() {
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(card);
  });
}

// Add product to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

// Update cart display
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price} `;
    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = () => removeFromCart(index);

    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Checkout
document.getElementById("checkout-btn").addEventListener("click", () => {
  if(cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
  }
});

loadProducts();
