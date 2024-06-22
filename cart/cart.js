
function getCartItems() {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
}

function setCartItems(cartItems) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function displayCartItems() {
    var cartItems = getCartItems();
    var cartHtml = ``;
    var totalPrice = 0; 

    for (var i = 0; i < cartItems.length; i++) {
        var itemTotal = cartItems[i].price * cartItems[i].quantity;
        totalPrice += itemTotal;

        cartHtml += `
            <div class="card p-3 m-3">
                <div><img src="${cartItems[i].image}" alt="${cartItems[i].title}" width="100"></div>
                <h4>${cartItems[i].title}</h4>
                <h5>${cartItems[i].price}$</h5>
                <p>Quantity: ${cartItems[i].quantity}</p>
                <p>Item Total: ${itemTotal.toFixed(2)}$</p>
                <button class="btn btn-danger" onclick="removeFromCart(${cartItems[i].id})">Delete</button>
            </div>
        `;
    }

    cartHtml += `
        <div class="total-price">
            <h3 class="m-5">Total Price: ${totalPrice.toFixed(2)}$</h3>
            <button class="btn btn-success" onclick="completePurchase()">Complete Purchase</button>
        </div>
        <div id="success-message" style="display:none; color:green; font-weight:bold;">Successfully</div>
    `;

    document.getElementById("cart-items").innerHTML = cartHtml;
}

function removeFromCart(productId) {
    var cartItems = getCartItems();
    var productIndex = cartItems.findIndex(item => item.id === productId);

    if (productIndex !== -1) {
        if (cartItems[productIndex].quantity > 1) {
            cartItems[productIndex].quantity--;
        } else {
            cartItems.splice(productIndex, 1);
        }
    }

    setCartItems(cartItems);
    displayCartItems(); 
}

function completePurchase() {
    var successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";

    localStorage.removeItem('cartItems');

    setTimeout(function() {
        window.location.href = '../shop/shop.html';
    }, 2000);
}



    displayCartItems();
