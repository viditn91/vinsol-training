//Adding five new list items to the end of the unordered list '#myList'
var $list = $('#myList');
for (var i = 0; i < 5; i++) {
  $list.append('<li>List Item '+ (i + 8) +' </li>')
}
//Removing the odd list items
$('#myList li:odd').remove();
//Adding another h2 and another paragraph to the last div.module
$('div.module:last').append('<p>Another Paragraph</p><h2>Another Heading</h2>');
//Adding another option to the select element : "Wednesday"
$('select[name]').append('<option value="wednesday">Wednesday</option>');
//Adding a new div.module to the page after the last one; 
// putting a copy of one of the existing images inside of it.
$('div.module:last').after('<div class = "module"></div>');
$('img[alt=fruit]').clone().appendTo('div.module:last');