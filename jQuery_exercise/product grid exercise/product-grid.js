//Function to retrieve external JSON
function fetchProducts() {
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
  var products = fetchProducts();
  //Appending <img> elements to the container div from JSON
  $.each(products, function (index) {
    $('#container').append('<img src= "data/images/'+ products[index]['url'] +'">')
                   .children()
                   .eq(index)
                   .attr('color', products[index]['color'])
                   .attr('brand', products[index]['brand'])
                   .attr('sold_out', products[index]['sold_out'])
  });
  $('img').show();
  //Unchecking all checkboxes
  $('input:checked').each(function (index) {
    this.checked = false;
  });
  //Binding change event to the checkboxes
  $(':checkbox').bind('change', function() {
    var key   = [],
        value = [];
    var filterString = "";
    //Selecting all the checked Boxes and storing '[key=value]'
    // in a string. Value of each key is separated by ',' while for different
    // keys its separated by ';'
    $(':input:checked').each(function (index) {
      key.push(this.name);
      value.push(this.value);
      if (filterString == ""){
        filterString += '[' + key[index] + '="' + value[index] + '"]';
      } else if (key[index] == key[index-1]) {
        filterString += ',[' + key[index] + '="' + value[index] + '"]';
      } else if (key[index] != key[index-1]) {
        filterString += ';[' + key[index] + '="' + value[index] + '"]';
      }
    });
    var arr = filterString.split(';');
    var imageGrid = $('img');
    imageGrid.hide();
    if(filterString) {
      //For loop to selectively filter the values from $allImages
      for (var i in arr) {
        imageGrid = imageGrid.filter(arr[i]);
      }
    }
    imageGrid.show();
  });
});