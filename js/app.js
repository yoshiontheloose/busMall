'use strict';

// -------Global Variables-------

const resultsUlElem = document.getElementById('product_clicks');
const productImageSectionTag = document.getElementById('all_products'); //listener goes on
const leftImageTag = document.getElementById('left_image');
const centerImageTag = document.getElementById('center_image');
const rightImageTag = document.getElementById('right_image');
const leftProductH2Elem = document.getElementById('left_text');
const centerProductH2Elem = document.getElementById('center_text');
const rightProductH2Elem = document.getElementById('right_text');


let voteCounter = 0;

// Define current products



// constructor function to turn products into objects
function Product(name, imagePath, timesShown, timesVoted) {
  this.name = name;
  this.imagePath = imagePath
  this.timesVoted = timesVoted
  this.timesShown = timesShown

  // put all products into an array
  Product.allProducts.push(this)
  }
  
Product.allProducts = [];

//TODO
//problem 1
//create function to randomly pick three products from Product.allProducts array
//increment the timesShown variable in the product object everytime an image is displayed
//create a listener event to add to the HTML so that clicking the picture does:
//call function to randomly select 3 new images to display from array

function selectProducts() {
  const leftProductIndex = Math.floor(Math.random() * Product.allProducts.length);
  let centerProductIndex;
  while (centerProductIndex === undefined || centerProductIndex === leftProductIndex) {
    centerProductIndex = Math.floor(Math.random() * Product.allProducts.length);
  }
  let rightProductIndex;
  while (rightProductIndex === undefined || rightProductIndex === leftProductIndex || rightProductIndex === centerProductIndex) {
    rightProductIndex = Math.floor(Math.random() * Product.allProducts.length);
  }
  Product.allProducts[leftProductIndex].timesShown ++; 
  Product.allProducts[centerProductIndex].timesShown ++;
  Product.allProducts[rightProductIndex].timesShown ++;
}





//console.log(['allProducts']);
//(problem 2) increment the timesVoted variable in product object from the listener event created in problem 1
// 

//(problem 3)
//create a global variable for number of rounds to randomly generate. 25 is the default, but you can change this to smaller values for testing. This would be your voting for loop. Simple Example: for (i = 0; i < roundVarialbe.length; i++) { show images }

//(problem 4)
//When rounds are over, disable listener event (voting)
//Add a view results button that shows how many times each product was seen AND voted for. Example: bananna had 3 votes, and was seen 5 times.
// this means you need to create a function with a foreach statement that utilizes your allProduct array for its variable sources




new Product('R2D2 Suitcase', './img/bag.jpg');
new Product('Banana Slicer', './img/banana.jpg');
new Product('Smart Roll TP Stand', './img/bathroom.jpg');
new Product('Breathable Rainboots', './img/boots.jpg');
new Product('Breakfast Station 7000', './img/breakfast.jpg');
new Product('Meatwad Gum', './img/bubblegum.jpg');
// new Product('Booster Chair', './img/chair.jpg');
// new Product('Cthulhu', './img/cthulhu.jpg');
// new Product('Duck Dog Muzzle', './img/dog-duck.jpg');
// new Product('Dragon Meat, Freshly Slayed!', './img/dragon.jpg');
// new Product('U-PENsils', './img/pen.jpg');
// new Product('Pet Chores for Pet Rent', './img/pet-sweep.jpg');
// new Product('Pizza Scissors', './img/scissors.jpg');
// new Product('Sharking Bag', './img/shark,jpg');
// new Product('Baby Mop', './img/sweep.png');
// new Product('Star Wars Sleeping Bag', './img/tauntaun.jpg');
// new Product('Ethically sourced Unicorn Meat', './img/unicorn.jpg');
// new Product('Self-Watering Watering Can', './img/water-can.jpg');
// new Product('Drink your wine like you eat a turkey leg', './img/wine-glass.jpg');

selectProducts();
for (let i = 0; i < Product.allProducts.length; i++) {
  console.log(Product.allProducts[i]);
} 