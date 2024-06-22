function getProductIdFromUrl() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}


function ProductDetails(productId) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://fakestoreapi.com/products/${productId}`);
    xhr.send("");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var product = JSON.parse(xhr.response);
                displayProductDetails(product);
            }
        }
    };
}


function displayProductDetails(product) {
    var detailsHtml = `
        <div class="card p-5 ">
            <div><img src="${product.image}" alt="${product.title}" width="200"></div>
            <h2>${product.title}</h2>
            <h3>${product.price}$</h3>
            <p>${product.description}</p>
            <button class="btn btn-primary " onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
    document.getElementById("details").innerHTML = detailsHtml;
}



    var productId = getProductIdFromUrl();
    if (productId) {
        ProductDetails(productId);
    } else {
        document.getElementById("details").innerHTML = "<p>Product ID not found.</p>";
    }
