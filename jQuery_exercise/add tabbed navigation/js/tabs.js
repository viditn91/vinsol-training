//Hiding all of the modules
$('.module').css({'display' : 'none'});
//Creating an unordered list element before the first module
$('.module:first').before('<ul id = "newList"></ul>');
//Iterating over the modules using $.fn.each. For each module, using the text of the h2 element
//as the text for the list item that is added to the unordered list element.
$('.module h2').each(function() {
  $('#newList').append('<li>' + $(this).text() + '</li>');
});
//Binding a click event to the list item that :
//1. Shows the related module, and hides any other modules
//2. Adds a class of "current" to the clicked list item
//3. Removes the class "current" from the other list item
$('#newList li').each(
  function (index) {
    $(this).bind({
      'click' : function() {
        $('.module').css({'display' : 'none'});
        $('.module')[index].style.display = "block";
        $('#newList li').removeClass('current');
        $(this).addClass('current');
      }
  }); 
});
//Showing the first tab
$('#newList li:first').click();