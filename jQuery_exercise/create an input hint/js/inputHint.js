var $inputElement = $('input[name = q]'),
    $labelElement = $('label[for = q]'),
    $labelValue   = $labelElement.text();

//Setting the value of the search input to the text of the label element
$inputElement.val($labelValue);
//Adding a class of "hint" to the search input
$inputElement.toggleClass('hint');
//Removing the label element
$labelElement.remove();
//Binding a focus event to the search input that removes the hint text and the "hint" class
// and Also,  Binding a blur event that restores the hint text and "hint" classif no search 
// text was entered
$inputElement.bind({
  'focus': function() {
    if($(this).val() == $labelValue) {
      $(this).val("").removeClass('hint');
    }
  },
  'blur' : function() { 
    if($(this).val() == "") {
      $(this).val($labelValue).addClass('hint');
    }    
  }
});