'use strict';

// -------Global Variables-------

const resultsUlElem = document.getElementById('product_clicks');
const productImageSection = document.getElementById('all_products'); //listener goes on
const leftImage = document.getElementById('left_image');
const centerImage = document.getElementById('center_image');
const rightImage = document.getElementById('right_image');
const leftProductpElem = document.getElementById('left_text');
const centerProductpElem = document.getElementById('center_text');
const rightProductpElem = document.getElementById('right_text');


let voteCounter = 0;

// Create default empty object references
let currentLeftProduct = null;
let currentCenterProduct = null;
let currentRightProduct = null;



// constructor function to turn products into objects
function Product(name, imagePath, timesShown, timesVoted) {
  this.name = name;
  this.imagePath = imagePath
  this.timesVoted = 0;
  this.timesShown = 0;

  // put all products into an array
  Product.allProducts.push(this)
}
  
// Array of all the Products
Product.allProducts = [];

//problem 1
//create function to randomly pick three products from Product.allProducts array
// Display/render the random products selected
//increment the timesShown variable in the product object everytime an image is displayed
//create a listener event to add to the HTML so that clicking the picture does:
//call function to randomly select 3 new images to display from array

// Display/render the random products selected
Product.prototype.renderProduct = function(p, imageTag) {
  imageTag.src = this.imagePath;
  p.textContent = this.name;
}

function renderProducts(leftProduct, centerProduct, rightProduct) {
  leftProduct.renderProduct(leftProductpElem, leftImage);
  centerProduct.renderProduct(centerProductpElem, centerImage)
  rightProduct.renderProduct(rightProductpElem, rightImage)
}

//put results on html, section "product clicks"
function renderResults() {
  //clear out inner html of "product clicks"
  resultsUlElem.innerHTML = '';
  //add an h2 element with text content of results
  let createH2Elem = document.createElement('h2');
  createH2Elem.textContent = 'Results';
  resultsUlElem.appendChild(createH2Elem);
  //loop through the all products array and render an li for each product
  for (let i=0; i < Product.allProducts.length; i++) {
    let currentItem = Product.allProducts[i]
    let liElement = document.createElement('li');
    liElement.textContent = `${currentItem.name} : amount of votes ${currentItem.timesVoted} Times Shown : ${currentItem.timesShown} `
    resultsUlElem.appendChild(liElement);
  }
  //"image name" : "x amount" of votes and timesShown
}

function selectProducts() {     // function to pick three random products from Product.allProducts array
  let leftProductIndex = Math.floor(Math.random() * Product.allProducts.length);
  let centerProductIndex;
  while (centerProductIndex === undefined || centerProductIndex === leftProductIndex) {
    centerProductIndex = Math.floor(Math.random() * Product.allProducts.length);
  }
  let rightProductIndex;
  while (rightProductIndex === undefined || rightProductIndex === leftProductIndex || rightProductIndex === centerProductIndex) {
    rightProductIndex = Math.floor(Math.random() * Product.allProducts.length);
  }

  // Update object references selected from from three random products 
  // increment the timesShown variable in the product object everytime an image is displayed
  currentLeftProduct = Product.allProducts[leftProductIndex];
  currentCenterProduct = Product.allProducts[centerProductIndex];
  currentRightProduct = Product.allProducts[rightProductIndex];
  currentLeftProduct.timesShown++;  
  currentCenterProduct.timesShown++;
  currentRightProduct.timesShown++;
}


function productClick(e) {
  let userClick = e.target
  console.log('listening');
  if (voteCounter < 25) {
    if (userClick === leftImage || userClick === centerImage || userClick === rightImage) {
      voteCounter++;
      
      if (userClick === leftImage) {
        currentLeftProduct.timesVoted++;
      } 
      else if (userClick === centerImage) {
        currentCenterProduct.votes++;
      } 
      else {
        currentRightProduct.votes++
      }
      selectProducts();
      renderProducts(currentLeftProduct, currentCenterProduct, currentRightProduct);
    } else {
    alert(`Click this image to pick a product`);
    }
  } else {
    productImageSection.removeEventListener('click', productClick);
    //TODO create function to render results
    renderResults();
  }
}

productImageSection.addEventListener('click', productClick);


  
//(problem 2) increment the timesVoted variable in product object from the listener event created in problem 1


//(problem 3) -DONE
//create a global variable for vote counter 


//(problem 4) 
//When rounds are over, disable listener event (voting)
//Add a view results button that shows how many times each product was seen AND voted for. 

// this means you need to create a function with a foreach statement that utilizes your allProduct array for its variable sources
function logAllProducts() {
  for (let i = 0; i < Product.allProducts.length; i++) {
    console.log(Product.allProducts[i]);
    }
  }


new Product('R2D2 Suitcase', './img/bag.jpg');
new Product('Banana Slicer', './img/banana.jpg');
new Product('Smart Roll TP Stand', './img/bathroom.jpg');
new Product('Breathable Rainboots', './img/boots.jpg');
new Product('Breakfast Station 7000', './img/breakfast.jpg');
new Product('Meatwad Gum', './img/bubblegum.jpg');
new Product('Booster Chair', './img/chair.jpg');
new Product('Action Figure', './img/cthulhu.jpg');
new Product('Duck Dog Muzzle', './img/dog-duck.jpg');
new Product('Dragon Meat, Freshly Slayed!', './img/dragon.jpg');
new Product('U-PENsils', './img/pen.jpg');
new Product('Pet Chores for Pet Rent', './img/pet-sweep.jpg');
new Product('Pizza Scissors', './img/scissors.jpg');
new Product('Sharking Bag', './img/shark.jpg');
new Product('Baby Mop', './img/sweep.png');
new Product('Star Wars Sleeping Bag', './img/tauntaun.jpg');
new Product('Ethically sourced Unicorn Meat', './img/unicorn.jpg');
new Product('Self-Watering Watering Can', './img/water-can.jpg');
new Product('Ergonomic Wine Drinking Apparatus', './img/wine-glass.jpg');

selectProducts();
renderProducts(currentLeftProduct, currentCenterProduct, currentRightProduct);
// logAllProducts();

