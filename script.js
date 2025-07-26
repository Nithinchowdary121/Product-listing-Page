const products = [ 
  { name: 'Smartphone', category: 'Electronics', price: 150000, rating: 4.5, image: 
'https://tse3.mm.bing.net/th/id/OIP.CnDtdGNcqnBXMfvCyrRr3AHaHd?pid=Api&P=0&h=180' }, 
  { name: 'Laptop', category: 'Electronics', price: 85000, rating: 4.6, image: 
'https://tse2.mm.bing.net/th/id/OIP.D8lWaNkEiGmMoEmVjcTN8AHaFG?pid=Api&P=0&h=180' }, 
{ name: 'Jeans', category: 'Clothing', price: 1800, rating: 4.9, image: 'https://tse2.mm.bing.net/th/id/OIP.cUFKXKlq2kHcYbuTDxiPtwHaI4?pid=Api&P=0&h=180' }, 
{ name: 'Hoodie', category: 'Clothing', price: 1500, rating: 4.6, image: 'https://tse2.mm.bing.net/th/id/OIP.lAqztUroAzE02KG6l5erbQHaJQ?pid=Api&P=0&h=180' },  { name: 'Novel', category: 'Books', price: 1000, rating: 4.6, image: 'https://cdn.dreamtemplate.com/product/images/14/5863/20090823202258_1.jpg' }, 
  { name: 'JavaScript', category: 'Books', price: 180, rating: 4.0, image: 'https://sp.yimg.com/ib/th?id=OPAC.98SeEzFNPe38YQ474C474&o=5&pid=21.1&w=160&h=105' }, 
  { name: 'Tablet', category: 'Electronics', price: 22000, rating: 4.3, image: 'https://tse4.mm.bing.net/th/id/OIP.lUhOnQVpr_vRUbTk4n14ogHaHa?pid=Api&P=0&h=180'},
  { name: 'Shirt', category: 'Clothing', price: 1100, rating: 4.0, image: 'https://tse1.mm.bing.net/th/id/OIP.Iqw7ZMDVj9W0NZNUQH7ypwHaJC?pid=Api&P=0&h=180'},
  { name: 'HTML & CSS Notebook', category: 'Books', price: 250, rating: 4.4, image: 'https://tse1.mm.bing.net/th/id/OIP.o3IcD_tzwhBxUIblbNSDygHaGI?pid=Api&P=0&h=180'}
]; 
const categorySelect = document.getElementById('category'); const sortBySelect = document.getElementById('sortBy'); const productList = document.getElementById('productList'); 
 
function renderProducts(productArray) {   productList.innerHTML = '';   productArray.forEach(p => {     const card = document.createElement('div');     card.className = 'card';     card.innerHTML = ` 
      <img src="${p.image}" alt="${p.name}"> 
      <h3>${p.name}</h3> 
      <p>Category: ${p.category}</p> 
      <p class="price">₹${p.price}</p> 
      <p class="rating"><i class="fas fa-star"></i> ${p.rating}</p> 
    `; 
    productList.appendChild(card); 
  }); 
} 
function filterAndSortProducts() {   let filtered = [...products];   const selectedCategory = categorySelect.value;   const sortBy = sortBySelect.value;   if (selectedCategory !== 'all') {     filtered = filtered.filter(p => p.category === selectedCategory); 
  } 
  if (sortBy === 'price-asc') {     filtered.sort((a, b) => a.price - b.price);   } else if (sortBy === 'price-desc') {     filtered.sort((a, b) => b.price - a.price);   } else if (sortBy === 'rating') {     filtered.sort((a, b) => b.rating - a.rating); 
  } 
  renderProducts(filtered); 
} 
categorySelect.addEventListener('change', filterAndSortProducts); sortBySelect.addEventListener('change', filterAndSortProducts); renderProducts(products); 
