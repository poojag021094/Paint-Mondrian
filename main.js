/*var classname = document.getElementsByClassName("color");

var getcolor = function(){
  var color = document.getElementById('red').style.backgroundColor;
  console.log(color);
}

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', getcolor, false);
}
*/
$(document).ready(function () {

	var paint = "white"

	$(".color").on("click", function () {
		paint = $(this).css('background-color');
	})

	$('.row').on('click', function () {

		$(this).css("background-color", paint );
	});

});
