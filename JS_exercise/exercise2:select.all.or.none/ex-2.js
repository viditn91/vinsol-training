//storing all chekboxes in an array
var checkboxes = document.getElementsByName('color');
//function to check all boxes
function checkall(){
  for(var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = true;
  }
}
//function to deselect all boxes
function checknone() {
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }
}

