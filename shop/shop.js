var globalData = [];

// Load all products
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://fakestoreapi.com/products");
xhr.send("");

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            globalData = JSON.parse(xhr.response);
            console.log(globalData);
            showData();
        }
    }
};

function showData() {
    var cartona = ``;

    for (var i = 0; i < globalData.length; i++) {
        cartona += `
            <div class="card px-5">
                <div><img src="${globalData[i].image}" alt="${globalData[i].title}" width="100"></div>
                <h4>${globalData[i].title.slice(0, 11)}</h4>
                <h5>${globalData[i].price}$</h5>
                <p>${globalData[i].description.slice(0, 50)}</p>
                <button class="btn btn-danger" onclick="addToCart(${globalData[i].id})">Add to Cart</button>
                <button class="btn m-2 btn-danger" onclick="showDetails(${globalData[i].id})">Show Details</button>
            </div>
        `;
    }

    document.getElementById("tbody").innerHTML = cartona;
}



//===============================================================================
// Load jewelry products

var jewelryData = [];
var xhrJewelry = new XMLHttpRequest();
xhrJewelry.open("GET", "https://fakestoreapi.com/products/category/jewelery");
xhrJewelry.send("");

xhrJewelry.onreadystatechange = function () {
    if (xhrJewelry.readyState == 4) {
        if (xhrJewelry.status == 200) {
            jewelryData = JSON.parse(xhrJewelry.response);
            console.log(jewelryData);
        }
    }
};



function showjewelery() {
    var cartona = ``;

    for (var i = 0; i < jewelryData.length; i++) {
        cartona += `
            <div class="card">
                <div><img src="${jewelryData[i].image}" alt="${jewelryData[i].title}" width="100"></div>
                <h4>${jewelryData[i].title.slice(0, 11)}</h4>
                <h5>${jewelryData[i].price}$</h5>
                <p>${jewelryData[i].description.slice(0, 50)}</p>
                <button class="btn btn-danger" onclick="addToCart(${jewelryData[i].id})">Add to Cart</button>
              <button class="btn m-2 btn-danger " onclick="showDetails(${jewelryData[i].id})">showDetails </button>

            </div>
        `;
    }

    document.getElementById("tbody").innerHTML = cartona;
}







//=============================================================================
// Load electronics products

var electronicsData = [];
var xhrelectronics = new XMLHttpRequest();
xhrelectronics.open("GET", "https://fakestoreapi.com/products/category/electronics");
xhrelectronics.send("");

xhrelectronics.onreadystatechange = function () {
    if (xhrelectronics.readyState == 4) {
        if (xhrelectronics.status == 200) {
            electronicsData = JSON.parse(xhrelectronics.response);
            console.log(electronicsData);
        }
    }
};



function showElectronics() {
    var cartona = ``;

    for (var i = 0; i < electronicsData.length; i++) {
        cartona += `
            <div class="card">
                <div><img src="${electronicsData[i].image}" alt="${electronicsData[i].title}" width="100"></div>
                <h4>${electronicsData[i].title.slice(0, 11)}</h4>
                <h5>${electronicsData[i].price}$</h5>
                <p>${electronicsData[i].description.slice(0, 50)}</p>
                <button class="btn btn-danger" onclick="addToCart(${electronicsData[i].id})">Add to Cart</button>
                 <button class="btn m-2 btn-danger " onclick="showDetails(${electronicsData[i].id})">showDetails </button>

            </div>
        `;
    }

    document.getElementById("tbody").innerHTML = cartona;
}




//=============================================================================
// Load men's clothing products

var mensClothingData = [];
var xhrmensClothing = new XMLHttpRequest();
xhrmensClothing.open("GET", "https://fakestoreapi.com/products/category/men's clothing");
xhrmensClothing.send("");

xhrmensClothing.onreadystatechange = function () {
    if (xhrmensClothing.readyState == 4) {
        if (xhrmensClothing.status == 200) {
            mensClothingData = JSON.parse(xhrmensClothing.response);
            console.log(mensClothingData);
        }
    }
};



function showMensClothing() {
    var cartona = ``;

    for (var i = 0; i < mensClothingData.length; i++) {
        cartona += `
            <div class="card">
                <div><img src="${mensClothingData[i].image}" alt="${mensClothingData[i].title}" width="100"></div>
                <h4>${mensClothingData[i].title.slice(0, 11)}</h4>
                <h5>${mensClothingData[i].price}$</h5>
                <p>${mensClothingData[i].description.slice(0, 50)}</p>
                <button class="btn btn-danger" onclick="addToCart(${mensClothingData[i].id})">Add to Cart</button>
              <button class="btn m-2 btn-danger " onclick="showDetails(${mensClothingData[i].id})">showDetails </button>

            </div>
        `;
    }

    document.getElementById("tbody").innerHTML = cartona;
}




//=============================================================================
// Load men's clothing products

var womensClothingData = [];
var xhrwomensClothing = new XMLHttpRequest();
xhrwomensClothing.open("GET", "https://fakestoreapi.com/products/category/women's clothing");
xhrwomensClothing.send("");

xhrwomensClothing.onreadystatechange = function () {
    if (xhrwomensClothing.readyState == 4) {
        if (xhrwomensClothing.status == 200) {
            womensClothingData = JSON.parse(xhrwomensClothing.response);
            console.log(womensClothingData);
        }
    }
};



function showWomensClothing() {
    var cartona = ``;

    for (var i = 0; i < womensClothingData.length; i++) {
        cartona += `
            <div class="card">
                <div><img src="${womensClothingData[i].image}" alt="${womensClothingData[i].title}" width="100"></div>
                <h4>${womensClothingData[i].title.slice(0, 11)}</h4>
                <h5>${womensClothingData[i].price}$</h5>
                <p>${womensClothingData[i].description.slice(0, 50)}</p>
                <button class="btn btn-danger" onclick="addToCart(${womensClothingData[i].id})">Add to Cart</button>
                <button class="btn m-2 btn-danger " onclick="showDetails(${womensClothingData[i].id})">showDetails </button>

            </div>
        `;
    }

    document.getElementById("tbody").innerHTML = cartona;
}




function showDetails(productId) {
    window.location.href = `../details/details.html?id=${productId}`;


    console.log(productId);


}

function updateCartCount() {
    var cartItems = getCartItems();
    var cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

function addToCart(productId) {
    var cartItems = getCartItems();
    var product = globalData.find(item => item.id === productId);

    var existingProduct = cartItems.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        product.quantity = 1;
        cartItems.push(product);
    }

    setCartItems(cartItems);
    updateCartCount(); 
}

function getCartItems() {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
}

function setCartItems(cartItems) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}


updateCartCount();

function showDetails(productId) {
    window.location.href = `../details/details.html?id=${productId}`;
    console.log(productId);
}