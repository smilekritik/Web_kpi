const buyButtons = document.querySelectorAll('.buy-button');
const cartTotal = document.getElementById('cart-total');
const cartButton = document.getElementById('cart-button');
const cartItemCount = document.getElementById('cart-item-count');
const cartDropdown = document.getElementById('cart-dropdown');
const cartItemsList = document.getElementById('cart-items-list');
const categoryButton1 = document.querySelector('#category-buttons .content_list li:nth-child(1) .category-button');
const categoryButton2 = document.querySelector('#category-buttons .content_list li:nth-child(2) .category-button');
const categoryButton3 = document.querySelector('#category-buttons .content_list li:nth-child(3) .category-button');

const product1 = document.querySelector('#products .product:nth-child(1)');
const product2 = document.querySelector('#products .product:nth-child(2)');
const product3 = document.querySelector('#products .product:nth-child(3)');
const product4 = document.querySelector('#products .product:nth-child(4)');
const product5 = document.querySelector('#products .product:nth-child(5)');
const product6 = document.querySelector('#products .product:nth-child(6)');
const product7 = document.querySelector('#products .product:nth-child(7)');
const product8 = document.querySelector('#products .product:nth-child(8)');
const product9 = document.querySelector('#products .product:nth-child(9)');
const product10 = document.querySelector('#products .product:nth-child(10)');
const product11 = document.querySelector('#products .product:nth-child(11)');
const product12 = document.querySelector('#products .product:nth-child(12)');

let cartItems = [];

function addToCart(productName, productId) {
    const productElement = document.querySelector(`.product[data-id="${productId}"]`);
    const productPrice = parseFloat(productElement.dataset.price);

    cartItems.push({ name: productName, price: productPrice });
    updateCart();
}


function removeFromCart(productName) {
    const index = cartItems.indexOf(productName);
    if (index > -1) {
        cartItems.splice(index, 1);
    }
    updateCart();
}


function updateCart() {
    cartItemsList.innerHTML = '';

    let total = 0;
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Ціна ${item.price} грн `;

        total += item.price;

        const removeButton = document.createElement('button');
        removeButton.textContent = '✕';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', () => removeFromCart(item));

        li.appendChild(removeButton);
        cartItemsList.appendChild(li);


    });

    if (cartItems.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.textContent = 'Кошик порожній';
        emptyMessage.classList.add('empty-message');
        cartItemsList.appendChild(emptyMessage);
    }

    cartItemCount.textContent = cartItems.length;

    cartTotal.textContent = `Загальна сума: ${total} грн`;
}

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('.product-name').textContent;
        const productId = button.parentElement.getAttribute('data-id');
        addToCart(productName, productId);
    });
});

cartButton.addEventListener('click', () => {
    cartDropdown.classList.toggle('show');
});
function onPageLoad() {
    product1.style.display = 'block';
    product2.style.display = 'block';
    product3.style.display = 'block';
    product4.style.display = 'block';
    product5.style.display = 'none';
    product6.style.display = 'none';
    product7.style.display = 'none';
    product8.style.display = 'none';
    product9.style.display = 'none';
    product10.style.display = 'none';
    product11.style.display = 'none';
    product12.style.display = 'none';
}

window.addEventListener('load', onPageLoad);
categoryButton1.addEventListener('click', () => {
    product1.style.display = 'block';
    product2.style.display = 'block';
    product3.style.display = 'block';
    product4.style.display = 'block';
    product5.style.display = 'none';
    product6.style.display = 'none';
    product7.style.display = 'none';
    product8.style.display = 'none';
    product9.style.display = 'none';
    product10.style.display = 'none';
    product11.style.display = 'none';
    product12.style.display = 'none';
});

categoryButton2.addEventListener('click', () => {
    product1.style.display = 'none';
    product2.style.display = 'none';
    product3.style.display = 'none';
    product4.style.display = 'none';
    product5.style.display = 'block';
    product6.style.display = 'block';
    product7.style.display = 'none';
    product8.style.display = 'none';
    product9.style.display = 'none';
    product10.style.display = 'none';
    product11.style.display = 'none';
    product12.style.display = 'none';
});
categoryButton3.addEventListener('click', () => {
    product1.style.display = 'none';
    product2.style.display = 'none';
    product3.style.display = 'none';
    product4.style.display = 'none';
    product5.style.display = 'none';
    product6.style.display = 'none';
    product7.style.display = 'block';
    product8.style.display = 'block';
    product9.style.display = 'block';
    product10.style.display = 'block';
    product11.style.display = 'block';
    product12.style.display = 'block';
});