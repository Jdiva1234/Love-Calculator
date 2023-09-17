
// Get references to the cart elements
const itemCountElement = document.getElementById('itemCount');
const addToCartButton = document.getElementsByClassName('addToCartButton');



// Initialize item count
let itemCount = 0;

// Add a click event listener to the button
for (let i = 0 ; i < addToCartButton.length; i++){
    let currentFood = addToCartButton[i];
currentFood.addEventListener('click', function () {
    // Increment the item count
    itemCount++;
  
    // Update the item count display
    itemCountElement.textContent = itemCount;
    let currentFoodId = currentFood.getAttribute("id"); 
    let item = document.querySelectorAll("#" + currentFoodId);
console.log(item[1].innerHTML);
let cartContainer = document.getElementById("cart");
let currentItem = document.createElement("p") // create an element 
currentItem.innerHTML = item[1].innerHTML; //it sets the value of the HTML element and it gets the value 
cartContainer.append(currentItem); //add an item inside an element
})
};

