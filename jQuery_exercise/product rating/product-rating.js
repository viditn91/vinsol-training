$(function () {
  //Adding Rows
  var product = ['Coffee', 'Tea', 'Soda', 'Rum'];
  for (var i in product) {
    $('#table tbody').append('<tr></tr>');
  }
  //Adding Cells and Radio buttons
  $('tr:not(:first-child)').each(function (index){
    var len = $('th').length;
    //Adding product in first coloumn
    $(this).append('<td id ="' + index +'"></td>')
           .children()
           .eq(0)
           .text(product[index])
           .addClass('product');    
    //Adding radio buttons in rest coloumns       
    for (var i = 1; i < len; i++) {
      $(this).append('<td></td>')
             .children()
             .eq(i)
             .append('<input type = "radio" id="' + index + i + '" name = "'+ product[index] +'">');
    }
  });
  //Adding click event to ratings
  $('#table tbody').delegate('th:not(:first-child)','click', function(){ 
    $(this).addClass('clicked')
           .siblings()
           .removeClass('clicked');
    findPosition($(this)[0].cellIndex);
  });
  //Adding click event to products
  $('#table tbody').delegate('td.product','click', function(){ 
    $('td.product').removeClass('clicked');
    $(this).addClass('clicked');
    findPosition($(this)[0]);
  });
  //variables for storing the position of the radio-button to be checked
  var row_position = null,
      col_position = null;
  //function     
  function findPosition (element) {
    if (element.nodeName){
      row_position = element.id;
      col_position = null;
    } else {
      col_position = element;
    }
    if(row_position && col_position) {
      var string = '#' + row_position + col_position;
      $(string)[0].checked = 1;
    }
  }
});