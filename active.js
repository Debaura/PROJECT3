const priceToggle = document.getElementById("toggle");
const priceElements = document.querySelectorAll(".price");


priceToggle.addEventListener("change", function() {
    if (priceToggle.checked) {
        priceElements.forEach(function(price) {
            priceElements[0].innerText = "19.99";
            priceElements[1].innerText = "24.99";
            priceElements[2].innerText = "39.99";
            // Show monthly prices
        });
    } else {
        priceElements.forEach(function(price) {
            priceElements[0].innerText = "199.99";
            priceElements[1].innerText = "249.99";
            priceElements[2].innerText = "399.99";
            // Show annual prices
        });
    }
});