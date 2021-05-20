'use strict';

// -------Global Variables-------(const=constant)

const resultsUlElem = document.getElementById('product_clicks');
const productImageSection = document.getElementById('all_products'); //listener goes on
const leftImage = document.getElementById('left_image');
const centerImage = document.getElementById('center_image');
const rightImage = document.getElementById('right_image');
const leftProductText = document.getElementById('left_text');
const centerProductText = document.getElementById('center_text');
const rightProductText = document.getElementById('right_text');

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

// Prototype is a function to execute code from objects 
// Make a prototype to use with the render function below
Product.prototype.renderProduct = function(productText, productImage) {
  productImage.src = this.imagePath;
  productText.textContent = this.name;
}

// takes 3 products and displays them on html 
function renderProducts(leftProduct, centerProduct, rightProduct) {
  leftProduct.renderProduct(leftProductText, leftImage);
  centerProduct.renderProduct(centerProductText, centerImage)
  rightProduct.renderProduct(rightProductText, rightImage)
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
  //"image name" : "x amount" of votes and timesShown
    liElement.textContent = `${currentItem.name} : amount of votes ${currentItem.timesVoted} Times Shown : ${currentItem.timesShown} `
    resultsUlElem.appendChild(liElement);
  }
}

// function to pick three random products from Product.allProducts array
function selectProducts() {     
  
  const doNotUse = [];

  doNotUse.push(currentLeftProduct);
  doNotUse.push(currentCenterProduct);
  doNotUse.push(currentRightProduct);

  while(doNotUse.includes(currentLeftProduct)) {
    let leftProductIndex = Math.floor(Math.random() * Product.allProducts.length);
    currentLeftProduct = Product.allProducts[leftProductIndex];
  }
  doNotUse.push(currentLeftProduct);

  while(doNotUse.includes(currentCenterProduct)) {
    let centerProductIndex = Math.floor(Math.random() * Product.allProducts.length);
    currentCenterProduct = Product.allProducts[centerProductIndex];
  }

  doNotUse.push(currentCenterProduct);

  while (doNotUse.includes(currentRightProduct)) {
    let rightProductIndex = Math.floor(Math.random() * Product.allProducts.length);
    currentRightProduct = Product.allProducts[rightProductIndex];
  }
  doNotUse.push(currentRightProduct);

}

//begin chart
const displayChart = function() {
  const resultsChart = document.getElementById('resultsChart').getContext('2d');

  //arrays for data and labels
  const productData = [];
  const productLabels = [];

  //go through products
  for (let product of Product.allProducts) {
    productData.push(product.timesVoted);
    productLabels.push(product.timesShown);
  }

    const myChart = new Chart(resultsChart, {
      type: 'bar',
      data: {
          labels: productLabels,
          datasets: [{
              label: '# of Votes',
              data: productData,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

}


// listener for image clicks
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
      currentLeftProduct.timesShown++;
      currentCenterProduct.timesShown++;
      currentRightProduct.timesShown++;

      selectProducts();
      renderProducts(currentLeftProduct, currentCenterProduct, currentRightProduct);
    }
    else {
      alert(`Click this image to pick a product`);
    }
  }
  else {
    productImageSection.removeEventListener('click', productClick);
    renderResults();
    displayChart();
  }
}
//re-add listener
productImageSection.addEventListener('click', productClick);

  

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