  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

document.addEventListener('keydown', whichKey);

var numUpAndDown = 0;
var numLeftAndRight = 0;

var changeHead = 1;
var changeBody = 1;
var changeShoes = 1;

var head = ["./images/head0.png", "./images/head1.png", "./images/head2.png", "./images/head3.png", "./images/head4.png", "./images/head5.png"]
var body = ["./images/body0.png", "./images/body1.png", "./images/body2.png", "./images/body3.png", "./images/body4.png", "./images/body5.png"]
var shoes = ["./images/shoes0.png", "./images/shoes1.png", "./images/shoes2.png", "./images/shoes3.png", "./images/shoes4.png", "./images/shoes5.png"]

const headSrc = document.getElementById("head");
const bodySrc = document.getElementById("body");
const shoesSrc = document.getElementById("shoes");


function whichKey () {
var key = event.key;
if (key == "ArrowUp") {
  keyUpAndDownPlus();
}
if (key == "ArrowDown") {
  keyUpAndDownMinus();
}
if (key == "ArrowRight") {
  keyRight()
}
if (key == "ArrowLeft") {
  keyLeft()
}
}


function keyUpAndDownPlus () {
  if (numUpAndDown == 2) {
    numUpAndDown = 0
  } else {
    numUpAndDown++
  }
 console.log(numUpAndDown)
}

function keyUpAndDownMinus () {
  if (numUpAndDown == 0) {
    numUpAndDown = 2
  } else {
    numUpAndDown--
  }
 console.log(numUpAndDown)
}

function keyRight () {

var putHeadOn = head[changeHead]
var putBodyOn = body[changeBody]
var putShoesOn = shoes[changeShoes]

 if (numUpAndDown === 0 && changeHead === 5) {
  changeHead = 0;
  headSrc.src=(putHeadOn)
  return;
} else if (numUpAndDown === 0) {
  console.log(putHeadOn+'changeHeadElse')
  changeHead++
  headSrc.src=(putHeadOn)
} else if (numUpAndDown === 1 && changeBody === 5) {
  changeBody = 0;
  bodySrc.src=(putBodyOn)
  return;
} else if (numUpAndDown === 1) {
  console.log(putBodyOn+'changeBodyElse')
  changeBody++
  bodySrc.src=(putBodyOn)
} else if (numUpAndDown === 2 && changeShoes === 5) {
  changeShoes = 0;
  shoesSrc.src=(putShoesOn)
  return;
} else if (numUpAndDown === 2) {
  console.log(putShoesOn+'changeShoesElse')
  changeShoes++
  shoesSrc.src=(putShoesOn)
}
}


function keyLeft () {

var takeHeadOff = head[changeHead]
var takeBodyOff = body[changeBody]
var takeShoesOff = shoes[changeShoes]

 if (numUpAndDown === 0 && changeHead === 0) {
  changeHead = 5;
  headSrc.src=(takeHeadOff)
  return;
} else if (numUpAndDown === 0) {
  console.log(takeHeadOff+'changeHeadElse')
  changeHead--
  headSrc.src=(takeHeadOff)
} else if (numUpAndDown === 1 && changeBody === 0) {
  changeBody = 5;
  bodySrc.src=(takeBodyOff)
  return;
} else if (numUpAndDown === 1) {
  console.log(takeBodyOff+'changeBodyElse')
  changeBody--
  bodySrc.src=(takeBodyOff)
} else if (numUpAndDown === 2 && changeShoes === 0) {
  changeShoes = 5;
  shoesSrc.src=(takeShoesOff)
  return;
} else if (numUpAndDown === 2) {
  console.log(takeShoesOff+'changeShoesElse')
  changeShoes--
  shoesSrc.src=(takeShoesOff)
}
}