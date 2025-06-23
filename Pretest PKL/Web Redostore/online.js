const products = [
  {
    label: 'Order Now!',
    icon: '🎧',
    name: 'Apple HomePod 2 2023',
    price: 'Rp 5.899.000'
  },
  {
    label: 'Bonus',
    icon: '💻',
    name: 'MacBook Pro 2023 16 inch',
    price: 'Rp 46.599.000'
  },
  {
    label: 'Preorder',
    icon: '🖥️',
    name: 'Mac Mini 2023 M2',
    price: 'Rp 11.999.000'
  },
  {
    label: 'New',
    icon: '📱',
    name: 'iPad Pro 2022 11 inch',
    price: 'Rp 16.000.000'
  }
];

const container = document.getElementById('product-list');

products.forEach((product, index) => {
  const wrapper = document.createElement('a');
  wrapper.href = `deskrop.html?id=${index}`;
  wrapper.className = 'product-link';

  const card = document.createElement('div');
  card.className = 'product-card';

  card.innerHTML = `
    <div class="label">${product.label}</div>
    <div class="product-img purple-bg">${product.icon}</div>
    <h4>${product.name}</h4>
    <p class="price">${product.price}</p>
  `;

  wrapper.appendChild(card);
  container.appendChild(wrapper);
  
});

