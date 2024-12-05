// Initialize cart and cart total
let cart = [];
let total = 0;

// Function to add product to the cart
function addToCart(productName, price) {
    cart.push({ productName, price });
    total += price;
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total p');

    // Clear previous cart items
    cartItemsContainer.innerHTML = '';

    // Display the products in the cart
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.productName}</p>
            <p>KSh ${item.price}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Update total price
    cartTotal.textContent = `Total: KSh ${total}`;
}

// Attach event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productItem = button.closest('.product-item');
        const productName = productItem.querySelector('h3').textContent;
        const productPrice = parseInt(productItem.querySelector('p').textContent.replace('KSh ', '').replace(',', ''));

        addToCart(productName, productPrice);
    });
});
