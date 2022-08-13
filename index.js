// Change the left side dice image randomly
var randomNum1 = Math.floor(Math.random()*6)+1;
// console.log(randomNum1);

// Select the left image using query selector
var leftImg = document.getElementsByClassName("img1")[0]; //This select
var imgSrc1 = "images/dice"+randomNum1+".png";
leftImg.setAttribute("src",imgSrc1);


// Change the right side dice image randomly
var randomNum2 = Math.floor(Math.random()*6)+1;
console.log(randomNum2);

// Select the left image using query selector
var rightImg = document.getElementsByClassName("img2")[0]; //This select
var imgSrc2 = "images/dice"+randomNum2+".png";
rightImg.setAttribute("src",imgSrc2);
