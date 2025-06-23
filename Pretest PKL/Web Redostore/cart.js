const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart-items");
let total = 0;
let totalItems = 0;

cart.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "cart-item";
  div.innerHTML = `
    <input type="checkbox" class="item-check" checked />
    <img src="${item.image}" alt="${item.name}">
    <div class="cart-item-info">
      <h4>${item.name}</h4>
      <p>Rp${item.price.toLocaleString("id-ID")}</p>
      <a href="#">Tulis Catatan</a>
    </div>
    <div class="qty-control">
      <button onclick="changeQty(${index}, -1)">−</button>
      <span id="qty-${index}">${item.qty}</span>
      <button onclick="changeQty(${index}, 1)">+</button>
    </div>
    <button onclick="removeItem(${index})">🗑️</button>
  `;
  cartContainer.appendChild(div);

  total += item.price * item.qty;
  totalItems += item.qty;
});

document.getElementById("total-price").textContent = "Rp" + total.toLocaleString("id-ID");
document.getElementById("total-items").textContent = totalItems;
document.getElementById("buy-count").textContent = totalItems;

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty < 1) cart[index].qty = 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

document.querySelector(".btn-buy").addEventListener("click", () => {
  if (cart.length === 0) return alert("Keranjang kosong");

  const date = new Date().toLocaleDateString("id-ID");
  const invoice = `INV/${Date.now().toString().slice(-6)}`;
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const transaction = {
    date,
    invoice,
    total,
    products: cart
  };

  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  transactions.push(transaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  localStorage.removeItem("cart");

  window.location.href = "transactions.html";
});
