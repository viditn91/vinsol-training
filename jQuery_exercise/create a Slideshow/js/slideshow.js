//Moving the #slideshow element to the top of the body
$('body').prepend($('#slideshow'));
//Appending navigation bar to display the index of each image
$('#slideshow li').append('<p id = "navigation" </p>');
//Cycling through the list items inside the element; fading one in, displaying it for a few seconds,
// then fading it out and fading in the next one.
var i   = 0;
    len = $('#slideshow li').length;
slideChange();
setInterval( function () {
  slideChange();
}, 2000);
//Funtion to perform the animation and display the index of each image 
function slideChange() {
  $('#slideshow li').find('#navigation')
                    .text(i+1 + ' of ' + len);
  $('#slideshow li').eq(i)
                    .fadeIn()
                    .delay(1000)
                    .fadeOut(1000)
                    .siblings()
                    .hide();
  i++;
  i = (i == len) ? 0 : i;
}