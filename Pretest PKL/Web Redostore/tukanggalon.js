let quantity = 1;

function increase() {
  quantity++;
  document.getElementById('quantity').innerText = quantity;
}

function decrease() {
  if (quantity > 1) {
    quantity--;
    document.getElementById('quantity').innerText = quantity;
  }
}
document.querySelector(".btn-green").addEventListener("click", () => {
  const product = {
    name: "MacBook Pro 2023 M2 Pro 16/512GB Silver",
    price: 36499000,
    qty: 1,
    image: "https://via.placeholder.com/60x60.png?text=MacBook"
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Produk dimasukkan ke keranjang!");
  window.location.href = "cart.html";
});
