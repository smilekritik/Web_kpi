const buyButtons = document.querySelectorAll('.buy-button');
const cartTotal = document.getElementById('cart-total');
const cartButton = document.getElementById('cart-button');
const cartItemCount = document.getElementById('cart-item-count');
const cartDropdown = document.getElementById('cart-dropdown');
const cartItemsList = document.getElementById('cart-items-list');
const categoryButton1 = document.querySelector('#category-buttons .content_list li:nth-child(1) .category-button');
const categoryButton2 = document.querySelector('#category-buttons .content_list li:nth-child(2) .category-button');
const categoryButton3 = document.querySelector('#category-buttons .content_list li:nth-child(3) .category-button');

const productsContainer = document.getElementById('products');
let cartItems = [];

function addToCart(productName, productId, productPrice) {
    cartItems.push({ name: productName, price: productPrice });
    updateCart();
}

function removeFromCart(item) {
    const index = cartItems.indexOf(item);
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
        li.textContent = `${item.name} - Ціна ${item.price} грн`;

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

// Завантажити JSON-файл зі списком товарів
fetch("products.json")
    .then(response => response.json())
    .then(data => {
        // Пройтися по кожному товару в списку
        data.products.forEach(product => {
            // Створити елемент товару
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.setAttribute("data-id", product.id);
            productElement.setAttribute("data-price", product.price);
            productElement.setAttribute("data-category", product.category);

            // Додати назву товару
            const nameElement = document.createElement("div");
            nameElement.classList.add("product-name");
            nameElement.textContent = product.name;
            productElement.appendChild(nameElement);

            // Додати зображення товару
            const imageElement = document.createElement("div");
            imageElement.classList.add("product-image");
            imageElement.style.backgroundImage = `url('${product.image}')`;
            productElement.appendChild(imageElement);

            // Додати ціну товару
            const priceElement = document.createElement("div");
            priceElement.classList.add("product-price");
            priceElement.textContent = `Ціна ${product.price} грн`;
            productElement.appendChild(priceElement);

            // Додати кнопку "Додати до кошика"
            const buyButton = document.createElement("button");
            buyButton.textContent = "Додати до кошика";
            buyButton.classList.add("buy-button");
            buyButton.addEventListener("click", () => {
                const productName = productElement.querySelector(".product-name").textContent;
                const productId = productElement.getAttribute("data-id");
                const productPrice = parseFloat(productElement.getAttribute("data-price"));
                addToCart(productName, productId, productPrice);
            });
            productElement.appendChild(buyButton);

            // Додати товар до контейнера на сторінці
            productsContainer.appendChild(productElement);
        });
    });

cartButton.addEventListener('click', () => {
    cartDropdown.classList.toggle('show');
});

async function onPageLoad() {
    await fetch("products.json")
        .then(response => response.json())
        .then(data => {
            data.products.forEach(product => {
                const productElement = document.createElement("div");
                // Решта коду для створення елемента товару
                productsContainer.appendChild(productElement);
            });
        });

    categoryButton1.click();
}

window.addEventListener('load', onPageLoad);

categoryButton1.addEventListener('click', () => {
    const allProducts = productsContainer.querySelectorAll('.product');
    allProducts.forEach(product => {
        product.style.display = 'none';
    });

    const categoryProducts = productsContainer.querySelectorAll('.product[data-category="1"]');
    categoryProducts.forEach(product => {
        product.style.display = 'block';
    });
});

categoryButton2.addEventListener('click', () => {
    const allProducts = productsContainer.querySelectorAll('.product');
    allProducts.forEach(product => {
        product.style.display = 'none';
    });

    const categoryProducts = productsContainer.querySelectorAll('.product[data-category="2"]');
    categoryProducts.forEach(product => {
        product.style.display = 'block';
    });
});

categoryButton3.addEventListener('click', () => {
    const allProducts = productsContainer.querySelectorAll('.product');
    allProducts.forEach(product => {
        product.style.display = 'none';
    });

    const categoryProducts = productsContainer.querySelectorAll('.product[data-category="3"]');
    categoryProducts.forEach(product => {
        product.style.display = 'block';
    });
});