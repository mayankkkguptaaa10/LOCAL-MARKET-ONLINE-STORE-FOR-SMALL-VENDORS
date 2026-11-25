let count = 0;

function addCart() {
    count = count + 1;

    document.getElementById("count").innerHTML = count;

    alert("Product added to cart successfully!");
}

function searchProduct() {
    let search = document.getElementById("search").value.toLowerCase();

    let products = document.getElementsByClassName("product");

    let found = 0;

    for (let i = 0; i < products.length; i++) {

        if (products[i].innerText.toLowerCase().includes(search)) {
            products[i].parentElement.hidden = false;
            found = found + 1;
        }

        else {
            products[i].parentElement.hidden = true;
        }
    }

    if (found == 0) {
        document.getElementById("message").innerHTML = "No products found";
    }

    else {
        document.getElementById("message").innerHTML = "";
    }
}
