//function check which either checks or unchecks all the colors 
//depending on the id of the object(links in this case)
function check(value) {
  var checkBoxes = document.getElementsByName('color');

    for(var i = 0; i < checkBoxes.length; i++) {
      checkBoxes[i].checked = value;
    }
  }