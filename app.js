$(document).ready(function() {
window.scrollTo(0,0);
//only for now until the app is more complete
$("#welcome").hide();

var a1Array = [
"x<sup>2</sup> + 5x + 6", 
"x<sup>2</sup> + 4x + 4", 
"x<sup>2</sup> - 9", 
"x<sup>2</sup> + 8x + 15", 
"x<sup>2</sup> - 6x + 9", 
"x<sup>2</sup> - 10x + 21", 
"x<sup>2</sup> - 3x + 2", 
"x<sup>2</sup> - 6x - 16", 
"x<sup>2</sup> - 11x + 24", 
"x<sup>2</sup> + 3x - 18", 
"x<sup>2</sup> - x - 20", 
"x<sup>2</sup> - 6x - 7"
];
var randomIndex = Math.floor(Math.random() * 11) + 1;

var secondArray = [
"2x<sup>2</sup> - 3x - 2",
"2x<sup>2</sup> + 5x - 12",
"3x<sup>2</sup> + 5x - 2",
"4x<sup>2</sup> - 4x - 3",
"5x<sup>2</sup> - 13x - 6",
"2x<sup>2</sup> + 3x + 1",
"2x<sup>2</sup> - 9x + 10",
"3x<sup>2</sup> + 13x + 4",
"4x<sup>2</sup> + 11x + 6",
"2x<sup>2</sup> - 9x + 4",
];
var ranInd = Math.floor(Math.random()* 9) + 1;

// on-clicks for which to appear
$("#a1").on("click", function() {
  console.log(randomIndex)
  $("#question").html(a1Array[randomIndex]);
})

$("#aNot1").on("click", function() {
  console.log(ranInd);
 $("#question").html(secondArray[ranInd]);
})

})