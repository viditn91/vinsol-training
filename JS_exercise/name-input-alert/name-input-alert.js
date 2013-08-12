
function inputValue(name){
  do{
    var nameValue = prompt("enter your "+ name +" name");
    if(nameValue == null || !nameValue.trim()){
      alert("Initials should not be empty or contain only spaces");
    }
  }while (!nameValue || !nameValue.trim())
  return nameValue;
}
var firstname = inputValue("first");
var lastname = inputValue("last");
alert("hello "+firstname+" "+lastname);
document.write("name: "+firstname+" "+lastname);