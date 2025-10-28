document.getElementById("exploreBtn").addEventListener("click", () => {
  const menuSection = document.getElementById("menu");
  menuSection.classList.remove("hidden");
  menuSection.scrollIntoView({ behavior: "smooth" });
});

const menuItems = [
  {
    name: "Matcha Latte",
    country: "japan",
    img: "https://images.unsplash.com/photo-1605719125063-cb7d3a9c3d2f?auto=format&fit=crop&w=800&q=80",
    desc: "Japanese matcha with creamy milk — pure calm in a cup 🍵",
    price: "₹220"
  },
  {
    name: "Masala Chai",
    country: "india",
    img: "https://images.unsplash.com/photo-1505253216365-512ca1b52f52?auto=format&fit=crop&w=800&q=80",
    desc: "Spiced Indian tea brewed with cardamom, cinnamon, and love 💛",
    price: "₹150"
  },
  {
    name: "Espresso",
    country: "italy",
    img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=800&q=80",
    desc: "Rich Italian espresso with bold and aromatic flavor ☕",
    price: "₹180"
  },
  {
    name: "Green Detox Smoothie",
    country: "india",
    img: "https://images.unsplash.com/photo-1581578017421-68baf0a19d33?auto=format&fit=crop&w=800&q=80",
    desc: "Spinach, banana, and apple blended for a refreshing detox 💚",
    price: "₹200"
  },
  {
    name: "Hojicha Latte",
    country: "japan",
    img: "https://images.unsplash.com/photo-1603985529862-9a4d3b7d2d64?auto=format&fit=crop&w=800&q=80",
    desc: "Roasted Japanese green tea with deep earthy tones ☕",
    price: "₹250"
  }
];

const container = document.getElementById("menuContainer");
const countrySelect = document.getElementById("countrySelect");

function displayMenu(country) {
  container.innerHTML = "";
  const filtered = country === "all" ? menuItems : menuItems.filter(i => i.country === country);
  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-item";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <strong>${item.price}</strong>
    `;
    container.appendChild(card);
  });
}

countrySelect.addEventListener("change", e => displayMenu(e.target.value));
displayMenu("all");
