$(document).ready(function() {
window.scrollTo(0,0);
//only for now until the app is more complete
// $("#welcome").hide();
$("#prompt").hide();
$("#problem").hide();
$("#guesses").hide();
$("#output").hide();
$("#finalCheck").hide();

$(document).on("click", ".start", function() {
  start();
  $("#first").focus();
})

function start() {
  $("#welcome").hide();
  $("#problem").show();
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
  $("#buttonChoices").hide();
  console.log(randomIndex)
  $("#question").html(a1Array[randomIndex]);
  $("#prompt").show();
  $("#guesses").show();
  $("#first").focus();
  
  $(document).ready(function(){
    $('input').keyup(function(){
        if(this.value.length==$(this).attr("maxlength")){
            
          // $('input').css("visibility", "hidden" )
            $(this).next().focus();
        }
    });
});

  $("#enterAnswer").on("click", function(event) {
    event.preventDefault();
    $("#output").show();
    
    
    var firstOperation = $("#first").val();
    
    var emptyArr = [];
    emptyArr.push(firstOperation)
    var one = "1";
    emptyArr.push(one);
    var newArrayString = emptyArr.toString().replace(",", "");
    var newArrayInt = parseInt(newArrayString, 10);

    var firstNumber = $("#second").val();
    var firstChoice = (newArrayInt*firstNumber)

    var secondOperation = $("#third").val();
    var emptyArrTwo = [];
    emptyArrTwo.push(secondOperation);
    var oneTwo = "1";
    emptyArrTwo.push(oneTwo);
    var newArrayStringTwo = emptyArrTwo.toString().replace(",", "");
    var newArrayIntTwo = parseInt(newArrayStringTwo, 10);
    
    var secondNumber = $("#fourth").val();
    var secondChoice = (newArrayIntTwo*secondNumber);
    
    if (firstChoice < 0) {
      var firstChoiceString = "(" + firstChoice + ")"
    }
    else {
      firstChoiceString = firstChoice
    }
    if (secondChoice < 0) {
      var secondChoiceString = "(" + secondChoice + ")"
    }
    else {
      secondChoiceString = secondChoice
    }

    

    $("#chose").html(firstChoice + " and " + secondChoice);
    var multiplied = firstChoice * secondChoice
    $("#multiplied").html("c = " + firstChoiceString + " x " + secondChoiceString + " = " + multiplied);
    var sum = firstChoice + secondChoice;
    $("#sum").html("b = " + firstChoiceString + " + " + secondChoiceString + " = " + sum);

    if (sum > 0) {
      if (sum == 1) {
        sumTwo = " "
      }
      else {
      sumTwo = "+ " + sum
      }
    }
    else if (sum < 0){
      if (sum == -1) {
        sumTwo = " - "
      }
      else {
      sumTwo = " - " + Math.abs(sum)
    }
  }
  else {
    sumTwo = 0;
  }

  
  console.log(sumTwo);

    if (multiplied > 0) {
      product = "+ " + multiplied
    }
    else {
      product = multiplied
    }

    var firstChoicePos = Math.abs(firstChoice)
    var secondChoicePos = Math.abs(secondChoice)
    if (firstChoice > 0) {
      var firstChoiceFinal = " + " + firstChoicePos;
    }
    else {
      firstChoiceFinal = " - " + firstChoicePos;
    }

    if (secondChoice > 0) {
      var secondChoiceFinal = " + " + secondChoicePos
    }
    else {
      var secondChoiceFinal = " - " + secondChoicePos;
    }

    if (sumTwo == 0) {
      $("#answer").html("Your answer of <mark>(x " + firstChoiceFinal + ")(x " + secondChoiceFinal + ")</mark> would FOIL back to the following quadratic expression: <mark>x<sup>2</sup> " + " - " + Math.abs(product) + "</mark>. <br>Is that what you started with?");
      
    }
    else {

    $("#answer").html("Your answer of  <mark>(x " + firstChoiceFinal + ")(x " + secondChoiceFinal + ")</mark> would FOIL back to the following quadratic expression: <mark>x<sup>2</sup> " + sumTwo + "x " + product + "</mark>.  <br>Is that what you started with?");
    }

    // $("#finalCheck").show();
    


    // $("#finalCheck").html("So, does your answer of (x " + firstChoiceFinal + ")(x " + secondChoiceFinal + ") give you back exactly the expression you started with: <mark>" + a1Array[randomIndex] + "</mark>?"); 
  })
})

$("#aNot1").on("click", function() {
  console.log(ranInd);
 $("#question").html(secondArray[ranInd]);
 $("#prompt").html("override");
 $("#guesses").html("override");
})

}
})