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
    $(this).append('<td></td>')
           .children()
           .eq(0)
           .text(product[index])
           .addClass('product');    
    //Adding radio buttons in rest coloumns       
    for (var i = 1; i < len; i++) {
      $(this).append('<td></td>')
             .children()
             .eq(i)
             .append('<input type = "radio" name="'+ product[index] +'">');
    }
  });
  var row_position = null,
      col_position = null;
  //disabling all buttons initially
  $(':radio').attr('disabled',true);
  //Adding click event to ratings
  $('#table tbody').delegate('th:not(:first-child)','click', function() { 
    $('th:not(:first-child)').removeClass('clicked');
    var scope = $(this);
    scope.addClass('clicked');
    col_position = scope[0].cellIndex;
    setButton();
  });
  //Adding click event to products
  $('#table tbody').delegate('td.product','click', function() { 
    $('td.product').removeClass('clicked');
    var scope = $(this);
    scope.addClass('clicked');
    row_position = scope.parent()[0].rowIndex;
    setButton();
  });
  //function to set the button corresponding to the row and column positon and disable the rest
  function setButton () {
    if(row_position && col_position) {
      $('td:not(.product)').each( function () {
        var scope = $(this);
        if(scope[0].cellIndex == col_position && scope.parent()[0].rowIndex == row_position) {
          $(':radio[name=' + product[row_position-1]+ ']').attr('disabled', true);
          scope.find(':radio').attr('disabled',false);
          scope.find(':radio')[0].checked = 1;
          col_position = null;
        }
      });
    }    
  }
});