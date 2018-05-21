# Paint-Mondrian
Paint A Mondrian using HTML, CSS and jQuery
$(document).ready(function(){    //this basically indicate to run function on loading of document
var paint = "white".             //initially the value of variable paint is set to be White.
$(".color").on("click", function(){.  //indicate that on click of class color
paint = $(this).css('background-color');   //it would store the value of class color in variable in paint.
})
$(".row").on("click", function(){.     //Indicate that onclick of class row
$(this).css("background-color",paint);  //the value of class row is set to be the value of paint.
})
});
