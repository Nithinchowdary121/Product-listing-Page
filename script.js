const products = [ 
  { name: 'Smartphone', category: 'Electronics', price: 12000, rating: 4.2, image: 
'images/phone1.png' }, 
  { name: 'Laptop', category: 'Electronics', price: 45000, rating: 4.5, image: 
'images/laptop.png' }, 
{ name: 'Jeans', category: 'Clothing', price: 1500, rating: 3.9, image: 'images/jeans1.png' }, 
{ name: 'Hoodie', category: 'Clothing', price: 900, rating: 4.1, image: 'images/hoodie1.png' },  { name: 'Novel', category: 'Books', price: 600, rating: 4.6, image: 'images/novel.png' }, 
  { name: 'JavaScript', category: 'Books', price: 180, rating: 4.0, image: 'images/js1book.png' }, 
  { name: 'Tablet', category: 'Electronics', price: 22000, rating: 4.3, image: 'images/tab1.png' 
}, 
  { name: 'Shirt', category: 'Clothing', price: 1100, rating: 4.0, image: 'images/shirt1.png' }, 
  { name: 'HTML & CSS Notebook', category: 'Books', price: 250, rating: 4.4, image: 'images/htmlbook1.png' } 
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
