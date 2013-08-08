// function check(obj) checks the id of the argument "obj", if its not "none" then it further checks
// if the checkbox is checked/unchecked thereby increasing/decreasing the counter. If the counter 
// reaches 4, it shows an alert message with the name of the days which are checked.
// If the id of the "obj" is "none" it unchecks all other checkboxes.
var counter = 0;
function check(obj) {
  var days = document.getElementsByName('days');
  if (obj.id != "none") {
    if (obj.checked == true) {
      days[days.length-1].checked = false;
      counter++;
      if (counter == 4) {
        obj.checked = false;
        var store = [];
        for (var i = 0; i < (days.length); i++) {
          if(days[i].checked == true) {
            store.push(days[i].id);
          }
        }
        alert("Only 3 days can be selected. You have selected "+ store[0] + ", " + store[1]+ " and " + store[2]);
        counter = 3;
      }
    }
    else {
      counter--;
    }
  }
  else if (obj.id == "none") {
    for (var i = 0; i < (days.length-1); i++) {
      days[i].checked = false;
    }
    counter = 0;
  }
}