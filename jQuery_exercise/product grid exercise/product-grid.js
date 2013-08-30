//Function to retrieve external JSON
function JSONAjax() {
  var data = "";
  $.ajax({
    url      : 'data/product-grid.json',
    async    : false,
    type     : 'GET',
    dataType : 'json',
    success  : function (json){
      data = json;
    }
  }); 
  return data;  
}
$(document).ready(function() {
//variable to store the JSON
  var jsonData = JSONAjax();
  var string = "";
  //Appending <img> elements to the container div from JSON
  $.each(jsonData, function (index) {
    $('#container').append('<img src='+ jsonData[index]['url'] +'>')
                   .children()
                   .eq(index)
                   .addClass(jsonData[index]['color'])
                   .addClass(jsonData[index]['brand'])
                   .addClass(jsonData[index]['sold_out'])
                   .removeClass('BRAND');                   
  });
  //Unchecking all checkboxes
  $('input:checked').each(function (index) {
    $(this)[0].checked = false;
  });
  //Binding change event to the checkboxes
  $(':checkbox').bind('change', function() {
    string = "";
    var key   = [],
        value = [];
    //Selecting all the checked Boxes and storing the values of the keys
    // in a string. Value of each key is separated by ',' while for different
    // keys its separated by ' '.
    $('input:checked').each(function (index) {
      key.push($(this)[0].name);
      value.push($(this)[0].value);
      if (string == ""){
        string += '.' + value[index];
      } else if (key[index] == key[index-1]) {
        string += ',.' + value[index];
      } else if (key[index] != key[index-1]) {
        string += ' .' +value[index];
      }
    });
    //an array to store the string splitted by spaces.
    var arr = string.split(' ');
    var $allImages = $('img');
    $allImages.hide();
    //For loop to selectively filter the values from $allImages
    if(string) {
      for (var i in arr) {
        $allImages = $allImages.filter(arr[i]); 
      }
      $allImages.show();
    }
  });
});