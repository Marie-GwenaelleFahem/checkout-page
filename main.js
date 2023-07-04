let addButtons = document.querySelectorAll(".addItem");
let removeButtons = document.querySelectorAll(".removeItem");
let nbItems = document.querySelectorAll(".nbItem");
let newValueElements = document.querySelectorAll(".newValue");
let totalPrice = 0;
let itemPrices = document.querySelectorAll(".item-price p");

addButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    addItemToCart(index);
  });
});

removeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    removeItemFromCart(index);
  });
});


function addItemToCart(index) {
    let currentValue = parseInt(nbItems[index].value);
    let newValue = currentValue + 1;
    nbItems[index].value = newValue;
    newValueElements[index].innerHTML = newValue;

    let itemPrice = parseFloat(itemPrices[index].innerText.slice(1));
    totalPrice += itemPrice;
    document.getElementById("total").innerText = "$" + totalPrice.toFixed(2);
}
  
function removeItemFromCart(index) {
    let currentValue = parseInt(nbItems[index].value);
    let newValue = currentValue - 1;
  
    if (currentValue > 0) {
        nbItems[index].value = newValue;
        newValueElements[index].innerHTML = newValue;

        let itemPrice = parseFloat(itemPrices[index].innerText.slice(1));
        totalPrice -= itemPrice;
        document.getElementById("total").innerText = "$" + totalPrice.toFixed(2);
    }
} 
