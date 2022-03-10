  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //



const inflate = document.getElementById("unicorn").addEventListener('click', inflator); //returns a HTMLCollection string of all classnames that are live on the page, kinda like a array.
const inflate1 = document.getElementById("unicorn1").addEventListener('click', inflator1);
const inflate2 = document.getElementById("unicorn2").addEventListener('click', inflator2);
const inflate3 = document.getElementById("unicorn3").addEventListener('click', inflator3);

const img = document.getElementById("unicorn");
const img1 = document.getElementById("unicorn1");
const img2 = document.getElementById("unicorn2");
const img3 = document.getElementById("unicorn3");


var counter = 1;
var counter1 = 1;
var counter2 = 1;
var counter3 = 1;


function inflator () {
  console.log('Clicked0')
  console.log(counter)
if (counter === 3) {
img.src="./images/unicorn-3.png";
  counter = 0;
  alert("Unicorn 1 says thank you!")
  return;
} else if (counter === 2) {
  img.src="./images/unicorn-2.png";
  counter++
} else if (counter === 1) {
  img.src="./images/unicorn-1.png";
  counter++
} else if (counter === 0) {
 img.src="./images/unicorn-0.png";
  counter++
}
}

function inflator1 () {
  console.log('Clicked1')
  console.log(counter1)
if (counter1 === 3) {
img1.src="./images/unicorn-3.png";
  counter1 = 0;
  alert("Unicorn 2 says thank you!")
  return;
} else if (counter1 === 2) {
  img1.src="./images/unicorn-2.png";
  counter1++
} else if (counter1 === 1) {
  img1.src="./images/unicorn-1.png";
  counter1++
} else if (counter1 === 0) {
 img1.src="./images/unicorn-0.png";
  counter1++
}
}

function inflator2 () {
  console.log('Clicked2')
  console.log(counter2)
if (counter2 === 3) {
img2.src="./images/unicorn-3.png";
  counter2 = 0;
  alert("Unicorn 3 says thank you!")
  return;
} else if (counter2 === 2) {
  img2.src="./images/unicorn-2.png";
  counter2++
} else if (counter2 === 1) {
  img2.src="./images/unicorn-1.png";
  counter2++
} else if (counter2 === 0) {
 img2.src="./images/unicorn-0.png";
  counter2++
}
}

function inflator3 () {
  console.log('Clicked3')
  console.log(counter3)
if (counter3 === 3) {
img3.src="./images/unicorn-3.png";
  counter3 = 0;
  alert("Unicorn 4 says thank you!")
  return;
} else if (counter3 === 2) {
  img3.src="./images/unicorn-2.png";
  counter3++
} else if (counter3 === 1) {
  img3.src="./images/unicorn-1.png";
  counter3++
} else if (counter3 === 0) {
 img3.src="./images/unicorn-0.png";
  counter3++
}
}

console.log("Inflate The Unicorn!")
