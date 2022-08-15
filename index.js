var defaultimg = "images/dice6.png";
var arr = [6, 6];
// Select the left image using query selector
var leftImg = document.getElementsByClassName("img1")[0];

// Select the left image using query selector
var rightImg = document.getElementsByClassName("img2")[0];
var headingText = document.querySelector("h1");

//Roll the dices when button is clicked
var rollBtn = document.querySelector(".roll");
rollBtn.addEventListener("click", function() {
  generateRandNum();
  var imgSrc1 = "images/dice" + arr[0] + ".png";
  leftImg.setAttribute("src", imgSrc1);

  var imgSrc2 = "images/dice" + arr[1] + ".png";
  rightImg.setAttribute("src", imgSrc2);

  //Declare who wins depending on highest value among the dices
  if (arr[0] > arr[1]) {
    headingText.innerHTML = "Player 1 win!";
  } else if (arr[1] > arr[0]) {
    headingText.innerHTML = "Player 2 win!";
  } else {
    headingText.innerHTML = "Draw!!! Roll again";
  }
})

//Reset the game when reset button is clicked
document.querySelector(".reset").addEventListener("click",function(){
  reset();
})

//Generate two random number between 1 to 6
function generateRandNum() {
  var randomNum1 = Math.floor(Math.random() * 6) + 1;
  arr[0] = randomNum1;
  var randomNum2 = Math.floor(Math.random() * 6) + 1;
  arr[1] = randomNum2;
}

function reset() {
  headingText.innerHTML = "Let's Roll !";
  leftImg.setAttribute("src", defaultimg);
  rightImg.setAttribute("src", defaultimg);
}
