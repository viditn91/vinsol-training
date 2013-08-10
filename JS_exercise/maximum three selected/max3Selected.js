// counter is incremented/decremented on subsesequent checking/unchecking of a checkbox
// days stores all the checkbox elements
var counter = 0;
var days = document.getElementsByName('days');
var dayNone = document.getElementsByName('dayNone')[0];
// checkForMax3 checks if the counter has exceeded 3 and shows an alert message with
// the name of the days which have been selected.
function checkForMax3(obj) {
  if (obj.checked) {
    dayNone.checked = false;
    counter++;
    if (counter == 4) {
      obj.checked = false;
      var store = [];
      for (var i = 0; i < days.length; i++) {
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
// checkNone(value) is called when NONE is cheked to uncheck all other checkboxes. 
function checkNone(value) {
    for (var i = 0; i < days.length; i++) {
      days[i].checked = value;
    }
    counter = 0;
}
