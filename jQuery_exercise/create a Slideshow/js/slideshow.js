//Moving the #slideshow element to the top of the body
$('body').prepend($('#slideshow'));
//Cycling through the list items inside the element; fading one in, displaying it for a few seconds,
// then fading it out and fading in the next one.
//Any list-item with index greater than '0' is hidden
$("#slideshow li:gt(0)").hide();
setInterval( function() { 
	$('#slideshow  li:first')
	.fadeOut(0)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
    index();
}, 2000);
//Creating a <p> element to display the index of the slide
$('<p id = "navigation"></p>').appendTo('#slideshow li');
var i = 0;
index();
//function to display the index of the slide
function index() {
	i++;
	var len = $('#slideshow li').length;
	i = i > len ? 1 : i ;
	$('#navigation').text( i + ' of ' + len );
}