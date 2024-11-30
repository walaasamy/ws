// تحديد العناصر من HTML
const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');
const cartBtn = document.getElementById('cart-btn');
const cartItems = document.getElementById('cart-items');
const searchBtn = document.getElementById('search-btn');
const searchForm = document.querySelector('.search-form');

// Toggle ظهور/إخفاء القائمة الجانبية (Hamburger Menu) عندما يتم النقر على زر القائمة
menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');  // إضافة/إزالة الكلاس active من navbar
});

// Toggle ظهور/إخفاء سلة التسوق عندما يتم النقر على زر سلة التسوق
cartBtn.addEventListener('click', () => {
    cartItems.classList.toggle('active');  // إضافة/إزالة الكلاس active من cart-items
});

// Toggle ظهور/إخفاء نموذج البحث عندما يتم النقر على زر البحث
searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');  // إضافة/إزالة الكلاس active من search-form
});
