const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"), 10);

const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
const tx = transactions[id];

if (!tx) {
  document.body.innerHTML = "<h2>Transaksi tidak ditemukan.</h2>";
} else {
  document.getElementById("invoice").textContent = tx.invoice;
  document.getElementById("purchase-date").textContent = tx.date;

  const list = document.getElementById("product-list");

  tx.products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <div style="display:flex; gap:10px;">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <strong>${product.name}</strong><br>
          ${product.qty}x Rp${product.price.toLocaleString("id-ID")}
        </div>
      </div>
      <div>
        <strong>Total:</strong><br>Rp${(product.price * product.qty).toLocaleString("id-ID")}
        <br><button onclick="alert('Belum diimplementasi')">Beli Lagi</button>
      </div>
    `;
    list.appendChild(div);
  });
}
