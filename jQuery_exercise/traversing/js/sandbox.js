//logging each image element's 'alt' atribute
var $img = $('img[alt]').each( function (index) {
  console.log($(this).attr('alt'));
});
//selecting 'search' input text box and traversing up to the form and adding a class to it
$('input[name=q]').closest('form').addClass('module');
//selecting list item that has a class of 'current',removing the class and changing the class of
// the next list item 
$('#myList li.current').removeClass('current').next().addClass('current');
//Selecting the select element inside #specials and traversing to the submit button
$('#specials select').closest('form').find('input[type=submit]');
//Selecting the first list item in the #slideshow element; adding the class 
// "current" to it, and then adding a class of "disabled" to its sibling elements.
$('#slideshow li:first').addClass('current').siblings().addClass('disabled');