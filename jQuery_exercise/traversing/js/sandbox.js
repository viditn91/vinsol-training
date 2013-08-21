//logging each image element's 'alt' atribute
var $img = $('img[alt]').each( function (index) {
  console.log($(this).attr('alt'));
});
//selecting 'search' input text box and traversing up to the form
var $form = $('input[name=q]').parent();
$form.addClass('module');
//selecting list item that has a class of 'current',removing the class and changing the class of
// the next list item 
var $listItem = $('#myList li.current');
$listItem.removeClass('current');
$listItem.next().addClass('current');
//selecting the select element and traversing to the submit button
var $selectBox = $('#specials select');
var $submitButton = $selectBox.parent().next().children('input:submit');
//Selecting the first list item in the #slideshow element; adding the class 
// "current" to it, and then adding a class of "disabled" to its sibling elements.
var $firstListItem = $('#slideshow li:first');
$firstListItem.addClass('current');
$firstListItem.siblings().addClass('disabled');