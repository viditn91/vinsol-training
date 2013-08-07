//function check which either checks or unchecks all the colors 
//depending on the id of the object(links in this case)
function check(obj) {
  var checkBoxes = document.getElementsByName('color');
  if(obj.id == "checkAll") {
    for(var i = 0; i < checkBoxes.length; i++) {
      checkBoxes[i].checked = true;
    }
  }
  else if(obj.id == "none"){
    for (var i = 0; i < checkBoxes.length; i++) {
      checkBoxes[i].checked = false;
    }
  }
}
 

