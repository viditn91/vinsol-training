$(document).ready(function(){
  var index = 0;
//appending the container and button
//delegating click event to the button
  $('body').append('<div id = "container" ></div>')
           .append('<button id ="addItem">ADD ITEM</button>')
           .delegate('#addItem', 'click', function () {
             index++;
             $('#container').append('<div class = "inner">DIV number' + index + '<div>');
           });
//delagating click event to the div(s) inside container and last the last div
  $('#container').delegate('.inner', 'click', function() {
                   $(this).css('background-color', 'yellow');
                   $(this).siblings().css('background-color', 'transparent');
                 })
                 .delegate('.inner:last-child', 'click', function() {
                   index--;
                   $(this).remove();
                 });
});