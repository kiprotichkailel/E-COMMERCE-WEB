// Cart functionality
let cart = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotalElement = document.querySelector('.cart-total p');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productItem = this.closest('.product-item');
        const productName = productItem.querySelector('h3').textContent;
        const productPrice = parseFloat(productItem.querySelector('p').textContent.replace('$', ''));

        // Add product to cart
        const existingProductIndex = cart.findIndex(item => item.name === productName);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity++;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }

        // Update cart display
        updateCart();
    });
});

function updateCart() {
    // Clear current cart display
    cartItemsContainer.innerHTML = '';

    // Display cart items
    let total = 0;
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <p>${item.name} (x${item.quantity})</p>
            <p>$${(item.price * item.quantity).toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(cartItemElement);

        total += item.price * item.quantity;
    });

    // Update total price
    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
}

const checkoutButton = document.querySelector('.checkout');
checkoutButton.addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        alert(`Proceeding to checkout. Total: $${cartTotalElement.textContent.replace('Total: ', '')}`);
        cart = []; // Clear cart after checkout
        updateCart();
    }
});
