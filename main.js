let addButtons = document.querySelectorAll(".addItem");
let removeButtons = document.querySelectorAll(".removeItem");
let nbItems = document.querySelectorAll(".nbItem");
let newValueElements = document.querySelectorAll(".newValue");


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
}
  
function removeItemFromCart(index) {
    let currentValue = parseInt(nbItems[index].value);
    let newValue = currentValue - 1;
  
    if (currentValue > 0) {
      nbItems[index].value = newValue;
      newValueElements[index].innerHTML = newValue;
    }
} 
