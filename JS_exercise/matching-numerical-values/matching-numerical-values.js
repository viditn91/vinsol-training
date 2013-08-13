//constructor funtion or class
function formData(formId){
  this.formBox = document.getElementById(formId);
  this.numberField = document.getElementById('number');
  this.resultField = document.getElementById('result');
  this.formBox.addEventListener("submit", this.checkInput);
}
//method of the class to check the input for nueric value using regular expression
formData.prototype.checkInput = function(e) {
  var regExp = /^[0-9]+$/ig; 
  if(regExp.test(newForm.numberField.value)) {
    newForm.resultField.value = "true";
    alert("valid data. . form submitting");
  }
  else{
    newForm.resultField.value = "false";
    alert("invalid value");
    e.preventDefault();
  }
}
//creating new object newForm
var newForm = new formData('formBox');