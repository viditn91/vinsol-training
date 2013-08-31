$(document).ready(function(){
  var index = 0;
//appending the container and button
  $('body').append('<div id = "container"></div>')
           .append('<button>ADD ITEM</button>')
           //delegating click event to the button, it appends a new div everytime
           .delegate('button', 'click', function () {
             index = $('.inner').length;
             $('#container').append('<div class = "inner">DIV number' + (index+1) + '<div>')
                            //adding effect to the selected div
                            .delegate('.inner', 'click', function() {
                              $(this).css('background-color', 'yellow')
                                     .siblings().css('background-color', 'transparent');
                            })
                            //removing the last div once its clicked
                            .delegate('.inner:last-child', 'click', function(){
                              $(this).remove();
                            })
           });
});