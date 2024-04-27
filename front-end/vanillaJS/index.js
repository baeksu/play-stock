document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("stock-search");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputStockName = document.getElementById("stock-name").value;

        console.log(inputStockName);
    });
});
