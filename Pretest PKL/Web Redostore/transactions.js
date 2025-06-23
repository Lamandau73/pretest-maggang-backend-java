const container = document.getElementById("transaction-list");
const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

transactions.forEach((tx, index) => {
  const txCard = document.createElement("div");
  txCard.className = "transaction-card";

  const productList = tx.products.map(p => `${p.qty}x ${p.name}`).join(", ");

  txCard.innerHTML = `
    <div class="transaction-info">
      <p><strong>Belanja</strong> | ${tx.date} | <span class="transaction-status">Selesai</span></p>
      <p>${productList}</p>
      <p>INV/${tx.invoice}</p>
    </div>
    <div>
      <p><strong>Total Belanja:</strong><br>Rp${tx.total.toLocaleString("id-ID")}</p>
      <button onclick="location.href='transaction_detail.html?id=${index}'">Lihat Detail Transaksi</button>
      <button onclick="alert('Fungsi beli ulang belum dibuat')">Beli Lagi</button>
    </div>
  `;

  container.appendChild(txCard);
});
