//constructor funtion or class
function Match(formId){
  this.formBox = document.getElementById(formId);
  this.numberField = document.getElementById('number');
  this.resultField = document.getElementById('result');
  this.formBox.addEventListener("submit", this.dispOutput);
}
//method of the class to display the output on the result field
Match.prototype.dispOutput = function(e) {
  if(newForm.checkInput(newForm.numberField.value)) {
    newForm.resultField.value = "true";
    alert("Value is numeric. . form will submit");
  }else {
    newForm.resultField.value = "false";
    alert("Value is not numeric. . form will not submit");
    e.preventDefault();
  }  
}
//method of the class to check the input for nueric value using regular expression
Match.prototype.checkInput = function(value) {
  var regExp = /^[0-9]+$/ig; 
  return regExp.test(value);
}
//creating new object newForm
var newForm = new Match('formBox');