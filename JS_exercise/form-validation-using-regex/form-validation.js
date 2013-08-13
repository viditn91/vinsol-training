//constructor function or class
function checkFormValidation(formId){
  this.formToValidate = document.getElementById(formId);
  this.inputFields    = document.getElementsByClassName('inputValue');
  this.textBox        = document.getElementById('textarea');
  this.checkBox       = document.getElementById('checkbox');
  this.email          = document.getElementById('email');
  this.url            = document.getElementById('url');
  this.formToValidate.addEventListener("submit",this.checkInput);
  this.regexEmail     = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;
  this.regexUrl       = /^((https?|ftp|file)\:\/\/)?(www\.)?((\w+)(\.))?((\w+)\.([a-z]{2,4}))\/?(\w+\?\=\#\$\^)?/i;
}
//method of the class to validate the form fields
checkFormValidation.prototype.checkInput = function(e) {
  var flag = true;
  //checking the four input fields for empty value
  for( var i = 0; i < newForm.inputFields.length; i++){
    if (!newForm.inputFields[i].value || !newForm.inputFields[i].value.trim()){
      alert(newForm.inputFields[i].name+" cannot be empty");
      e.preventDefault();
      flag = false;
      break;
    }   
  }
  //checking regular expressions pattern over email and url field 
  if (flag){
    if(!newForm.regexEmail.test(newForm.email.value)){
      alert("email address not valid");
      flag = 0;
      e.preventDefault();
    }else if(!newForm.regexUrl.test(newForm.url.value)){
      alert("Home Page URL is not valid");
      flag = 0;
      e.preventDefault();
    }
  } 
  //checking the About Me text length for minimum length of 50
  if(flag && newForm.textBox.value.length < 50){
    alert("atleast 50 characters are to be entered in ABOUT ME section");
    e.preventDefault();
  }
  //checking the notification checkBox if checked 
  else if(flag && newForm.checkBox.checked) {
    alert("you will receive notification");
    var confirmation = confirm("form is valid. . . submitting");
    if (!confirmation){
      e.preventDefault();
    }
  }
  //checking the notification checkBox if unchecked 
  else if(flag && !newForm.checkBox.checked) {
    alert("you will not receive notification");
    var confirmation = confirm("form is valid. . . submitting");
    if (!confirmation) {
      e.preventDefault();
    }
  } 
}
//creating new object newForm
var newForm = new checkFormValidation("formBox");