$(document).ready(function() {
window.scrollTo(0,0);
//only for now until the app is more complete
// $("#welcome").hide();
$("#prompt").hide();
$("#promptTwo").hide();
$("#problem").hide();
$("#guesses").hide();
$("#guessesTwo").hide();
$("#output").hide();
$("#outputTwo").hide();
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
  
  // autofocus for each input
    $(document).ready(function(){
    $('input').keyup(function(){
        if(this.value.length==$(this).attr("maxlength")){
            $(this).next().focus();
        }
    });
    });

  $("#enterAnswer").on("click", function(event) {
    event.preventDefault();
    $("#output").show();
    $("#finalCheck").show()
    
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
    
    //handle html for b
    if (sum > 0) {
      if (sum == 1) {
        sumTwo = "+ "
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
  else if (sumTwo = 0){
    sumTwo = 0;
  }

    //handle html for c
    if (multiplied > 0) {
      product = "+ " + multiplied
    }
    else {
      product = "- " + Math.abs(multiplied)
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

    //html for final expression
    if (sumTwo == 0) {
      $("#answer").html("Your answer of <mark>(x " + firstChoiceFinal + ")(x " + secondChoiceFinal + ")</mark> would FOIL back to the following quadratic expression: <mark>x<sup>2</sup> " + " - " + Math.abs(multiplied) + "</mark>. <br>Is that what you started with?");
      $("#question").html("<mark>" + a1Array[randomIndex] + "</mark>")
    }
    else {
    $("#answer").html("Your answer of  <mark>(x " + firstChoiceFinal + ")(x " + secondChoiceFinal + ")</mark> would FOIL back to the following quadratic expression: <mark>x<sup>2</sup> " + sumTwo + "x " + product + "</mark>.  <br>Is that what you started with?");
    $("#question").html("<mark>" + a1Array[randomIndex] + "</mark>")
    }
    //correct button
    $("#clickMeTwo").on("click", function() {
      location.reload();
      start();
    })
    //incorrect button
    $("#notReady").on("click", function() {
      $("#first").val("");
      $("#second").val("");
      $("#third").val("");
      $("#fourth").val("");
      $("#first").focus();
    })
  })
})

$("#aNot1").on("click", function() {
  $("#promptTwo").show();
 $("#question").html(secondArray[ranInd]);
 $("#buttonChoices").hide();
 $("#guessesTwo").show();
  $("#firstAns").focus();
 

    $("#enterAnswerTwo").on("click", function(event) {
      event.preventDefault();
       $("#outputTwo").show();
       $("#finalCheck").show();

       var firNum = $("#firstAns").val();
       console.log(firNum);
       var firstOp = $("#secondAns").val();
       var empArr = [];
       empArr.push(firstOp);
       var uno = "1";
       empArr.push(uno);
       var newArrStr = empArr.toString().replace(",", "");
       var newArrInteger = parseInt(newArrStr, 10);
       var secNum = $("#thirdAns").val();
       var secChoice = newArrInteger * secNum;
       console.log(secChoice);

       var thirdNum = $("#fourthAns").val();
       console.log(thirdNum);
       var secOp = $("#fifthAns").val();
       var empArrTwo = [];
       empArrTwo.push(secOp);
       var unoDos = "1";
       empArrTwo.push(unoDos);
       var newArrStrTwo = empArrTwo.toString().replace(",", "");
       var newArrIntegerTwo = parseInt(newArrStrTwo, 10);
       var fourthNum = $("#sixthAns").val();
       var fourthChoice = newArrIntegerTwo * fourthNum;
       console.log(fourthChoice);

       if (secChoice < 0) {
         var secChoiceString = "(" + secChoice + ")";
       } 
       else {
         secChoiceString = secChoice
       }

       if (fourthChoice < 0) {
         var fourthChoiceString = "(" + fourthChoice + ")";
       }
       else {
         fourthChoiceString = fourthChoice;
       }

       $("#choseTwo").html("First Number: " + firNum + "<br>Second Number: " + secChoice + "<br>Third Number: " + thirdNum + "<br>Fourth Number: " + fourthChoice);

       var multToA = firNum * thirdNum
       $("#multToA").html("First Number: " + firNum + "<br>Third Number: " + thirdNum + "<br>a = " + firNum + " x " + thirdNum + " = " + multToA)

       var multToC = secChoice * fourthChoice;
       $("#multipliedTwo").html("Second Number: " + secChoice + "<br>Fourth Number: " + fourthChoice + "<br>c = " + secChoiceString + " x " + fourthChoiceString + " = " + multToC);

       if (multToC < 0) {
         var multToCFinal = " - " + Math.abs(multToC)
       }
       else {
         var multToCFinal = " + " + multToC
       }

       var sumToB = (firNum * fourthChoice) + (secChoice * thirdNum);
       if (sumToB < 0) {
         var sumToBFinal = " - " + Math.abs(sumToB)
       }
       else {
         var sumToBFinal = " + " + sumToB;
       }
       var firstxfourth = firNum * fourthChoice;
       if (firstxfourth < 0) {
         firstxfourthStr = "(" + firstxfourth + ")"
       }
       else {
         firstxfourthStr = firstxfourth
       }
       var secxthird = secChoice * thirdNum;
       if (secxthird < 0) {
         secxthirdStr = "(" + secxthird + ")"
       }
       else {
         secxthirdStr = secxthird;
       }
       $("#sumTwo").html("b = (First)*(Fourth) + (Second)(Third)<br>(" + firNum + " x " + fourthChoiceString + ") + (" + secChoiceString + " x " + thirdNum + ") = <br>" + firstxfourthStr + " + " + secxthirdStr + " = " + sumToB);

       if (firNum == 1) {
         var firNumFinal = ""
       }
       else {
         var firNumFinal = firNum
       }
       if (thirdNum == 1) {
         var thirdNumFinal = "";
       }
       else {
         var thirdNumFinal = thirdNum
       }
       if (secChoice > 0) {
        var secondChoiceFinal = " + " + secChoice
       }
       else {
         var secondChoiceFinal = " - " + Math.abs(secChoice);
       }

       if (fourthChoice > 0) {
        var fourthNumFinal = " + " + fourthChoice
       }
       else {
         var fourthNumFinal = " - " + Math.abs(fourthChoice);
       }

       $("#answer").html("Your answer of <mark>(" + firNumFinal + "x " + secondChoiceFinal + ")(" + thirdNumFinal + "x " + fourthNumFinal + ")</mark> would FOIL back to the following quadratic expression: <mark>"+multToA+"x<sup>2</sup> " + sumToBFinal + "x " + multToCFinal + "</mark>. <br>Is that what you started with?")
       $("#question").html("<mark>" + secondArray[ranInd] + "</mark>")

       $("#clickMeTwo").on("click", function() {
        location.reload();
        start();
      })
      $("#notReady").on("click", function() {
        $("#firstAns").val("");
        $("#secondAns").val("");
        $("#thirdAns").val("");
        $("#fourthAns").val("");
        $("#fifthAns").val("");
        $("#sixthAns").val("");
        $("#firstAns").focus();
      })


    })

//end of aNot1 section
})

//end start function
}

//end everything
})