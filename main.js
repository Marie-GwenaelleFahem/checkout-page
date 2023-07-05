let addButtons = document.querySelectorAll(".addItem");
let removeButtons = document.querySelectorAll(".removeItem");
let nbItems = document.querySelectorAll(".nbItem");
let newValueElements = document.querySelectorAll(".newValue");
let totalPrice = 0;
let itemPrices = document.querySelectorAll(".item-price p");

let toggle = document.querySelector('#cities');
let currentLi = document.querySelector("#currentLi");
let newLi = document.querySelector(".newLi");

// Form functions

toggle.onclick = dropdownMenu;
document.querySelector("#li1").addEventListener("click", selectACountry);
document.querySelector("#li2").addEventListener("click", selectACountry); 
document.querySelector("#li3").addEventListener("click", selectACountry); 
document.querySelector("#li4").addEventListener("click", selectACountry); 
document.querySelector("#li5").addEventListener("click", selectACountry); 

function dropdownMenu() {
  toggle.classList.toggle("opened");
}

function selectACountry(event) {
  if (event.target.nodeName === 'LI') {
    const value = event.target.textContent;
    newLi.innerText = value;
    currentLi.style.visibility = 'hidden';
  }
}

// Cart functions

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
