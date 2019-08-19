$(document).ready(function() {
window.scrollTo(0,0);
//only for now until the app is more complete
$("#welcome").hide();
$("#prompt").hide();
$("#guesses").hide();
$("#output").hide();

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
  $("#prompt").show();
  $("#guesses").show();
  $("#first").focus();
  $("#output").show();

  $("#enterAnswer").on("click", function(event) {
    event.preventDefault();
    var firstOperation = $("#first").val();
    var emptyArr = [];
    emptyArr.push(firstOperation)
    var one = "1";
    emptyArr.push(one);
    var newArrayString = emptyArr.toString().replace(",", "");
    var newArrayInt = parseInt(newArrayString, 10);

    var firstNumber = $("#second").val();
    console.log(newArrayInt*firstNumber)

    var secondOperation = $("#third").val();
    var emptyArrTwo = [];
    emptyArrTwo.push(secondOperation);
    var oneTwo = "1";
    emptyArrTwo.push(oneTwo);
    var newArrayStringTwo = emptyArrTwo.toString().replace(",", "");
    var newArrayIntTwo = parseInt(newArrayStringTwo, 10);
    
    var secondNumber = $("#fourth").val();
    console.log(newArrayIntTwo*secondNumber);
    
    // var numberOne = firstOperation * firstNumber;
    // console.log(numberOne);
    // var numberTwo = secondOperation * secondNumber;
    // console.log(numberTwo)
  })
})

$("#aNot1").on("click", function() {
  console.log(ranInd);
 $("#question").html(secondArray[ranInd]);
 $("#prompt").html("override");
 $("#guesses").html("override");
})

})