
const PRODUCTS = [
  { name: "Whiskas Tuna Crunch Makanan Kucing 480 g", cat: "Food", price: 31900, image: "images/Whiskas Tuna Crunch Makanan Kucing 480 g.jpg" },
  { name: "Pedigree Beefy Bites Makanan Anjing 1,5 kg", cat: "Food", price: 78900, image: "images/Pedigree Beefy Bites Makanan Anjing 1,5 kg.webp" },
  { name: "Pedigree Beefy Gravy Makanan Anjing Basah 400 g", cat: "Food", price: 27900, image: "images/Pedigree Beefy Gravy Makanan Anjing Basah 400 g.jpg" },
  { name: "Number 1 Pasir Kucing Anti Bau 6 kg", cat: "Cat", price: 189900, image: "images/Number 1 Pasir Kucing Anti Bau 6 kg.webp" },
  { name: "Number 1 Pasir Kucing Anti Bau Jumbo 12 kg", cat: "Cat", price: 399900, image: "images/Number 1 Pasir Kucing Anti Bau Jumbo 12 kg.webp" },
  { name: "Coolpet Kitty Collar Kalung Kucing Abu-Abu", cat: "Cat", price: 43900, image: "images/Coolpet Kitty Collar Kalung Kucing Abu-Abu.jpeg" },
  { name: "Hot Chips Mainan Gigitan Anjing Merah", cat: "Dog", price: 89900, image: "images/Hot Chips Mainan Gigitan Anjing Merah.webp" },
  { name: "Peanut Butter Mainan Gigitan Anjing Biru", cat: "Dog", price: 87900, image: "images/Peanut Butter Mainan Gigitan Anjing Biru.jpg" },
  { name: "Mouthwash Mainan Gigitan Anjing Biru", cat: "Dog", price: 43900, image: "images/Mouthwash Mainan Gigitan Anjing Biru.webp" },
  { name: "Pawise Paw Bowl Tempat Makan Anjing M 550 ml", cat: "Accessories", price: 57900, image: "images/Pawise Paw Bowl Tempat Makan Anjing M 550 ml.jpg" },
  { name: "Pawise Paw Bowl Tempat Makan Anjing S 300 ml", cat: "Accessories", price: 47900, image: "images/Pawise Paw Bowl Tempat Makan Anjing S 300 ml.webp" },
  { name: "Coolpet Doggy Collar Kalung Anjing Medium Abu-Abu", cat: "Accessories", price: 52900, image: "images/Coolpet Doggy Collar Kalung Anjing Medium Abu-Abu.webp" }
];

const paw = `
<svg class="paw" viewBox="0 0 24 24">
  <circle cx="6" cy="10" r="2.2"/>
  <circle cx="10.5" cy="6" r="2.2"/>
  <circle cx="15.5" cy="6" r="2.2"/>
  <circle cx="19" cy="10.5" r="2.2"/>
  <path d="M12.5 11c-3 0-5.5 3-5.5 5.5
  0 1.6 1.2 2.5 2.6 2.5
  1 0 1.9-.5 2.9-.5
  s1.9.5 2.9.5c1.4 0 2.6-.9 2.6-2.5
  0-2.5-2.5-5.5-5.5-5.5z"/>
</svg>`;

const formatRupiah = price =>
  "Rp " + price.toLocaleString("id-ID");

let category = "Semua";
let keyword = "";

function renderProducts() {
  const filtered = PRODUCTS.filter(product => {
    const matchCategory =
      category === "Semua" || product.cat === category;

    const matchKeyword =
      product.name.toLowerCase().includes(keyword);

    return matchCategory && matchKeyword;
  });

  const container = document.getElementById("products");

  if (filtered.length === 0) {
    container.innerHTML =
      '<div class="empty">Produk tidak ditemukan.</div>';
    return;
  }

  container.innerHTML = filtered.map(product => `
    <article class="prod">
      <div class="img"><img src="${product.image}" alt="${product.name}"></div>
      <div class="body">
        <span class="pill">${product.cat}</span>
        <h3>${product.name}</h3>
        <div class="price">${formatRupiah(product.price)}</div>
      </div>
    </article>
  `).join("");
}

document.getElementById("chips").addEventListener("click", event => {
  const button = event.target.closest(".chip");

  if (!button) return;

  document.querySelectorAll(".chip").forEach(chip => {
    chip.classList.toggle("active", chip === button);
  });

  category = button.dataset.c;
  renderProducts();
});

document.getElementById("q").addEventListener("input", event => {
  keyword = event.target.value.trim().toLowerCase();
  renderProducts();
});

renderProducts();
