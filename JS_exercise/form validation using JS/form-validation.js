var form = {
  register: document.getElementById('register'),
  textBox: document.getElementById('textarea'),
  checkBox: document.getElementById('checkbox'),
  fields: document.getElementsByClassName('inputValue')
};
console.log(form.fields);
form.register.addEventListener("submit",checkForm);


function checkForm(e) {
  var flag = true;
  for( var i = 0; i < form.fields.length; i++){
    if (form.fields[i].value == "" || !form.fields[i].value.trim()){
      alert(form.fields[i].name+" cannot be empty");
      e.preventDefault();
      flag = false;
      break;
    }
  }
  if(flag == true && form.textBox.value.length < 50){
    alert("atleast 50 characters are to be entered in ABOUT ME section");
    e.preventDefault();
  }
  else if(flag == true && form.checkBox.checked == true ) {
    alert("you will receive notification");
    var confirmation = confirm("form is valid. . . submitting");
    if (confirmation == false){
      e.preventDefault();
    }
  }

  else if(flag == true && form.checkBox.checked == false ) {
    alert("you will not receive notification");
    var confirmation = confirm("form is valid. . . submitting");
    if (confirmation == false){
      e.preventDefault();
    }
  }


}
