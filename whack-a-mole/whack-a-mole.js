  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //



console.log("Whack-a-Mole!")

// the rows and columns are already a so called "array" but access them and changing them is the feat.

var randomNum = Math.floor(Math.random() * 5);//rows
var randomNum2 = Math.floor(Math.random() * 5) ; //cells
var counter = 0;
var firstCount = 0;
var random1 = randomNum;
var random2 = randomNum2;


document.getElementsByTagName("table")[0].rows[random1].cells[random2].innerHTML= '<img src="mole.PNG" width="70" height="70" />';
document.getElementsByTagName("table")[0].rows[random1].cells[random2].id='IMG';
const imgCell= document.getElementById("IMG").addEventListener("click", addAMole);
//const button = document.getElementById("button").addEventListener("click", addAMole);

/*
if ( firstCount === 0) {
  addAMole()
  firstCount++
}
*/

function addAMole () {
 // if (counter === 1) {
console.log('clicked')
 // } else {
  window.location.reload();

 // }
}








