// global pointer increases/decreases with addition/delition of rows
// used to provide unique id(s) to rows.
var counter = 1;
//number of coloums
function createRow() {
  var myTable = document.getElementById('table');
  var myTableLength = myTable.rows.length;
  var row = table.insertRow(myTableLength);
  var rowId = "row" + counter;
  row.id = rowId;
  counter++;
  for (var i = 0; i < 3; i++ ) {
    cell = row.insertCell(i);
    if (i != 2) {
      cell.innerHTML = "<input id='" + rowId + i+ "'/>";
    }else {
      cell.innerHTML = "<input type= 'button' value='Save' onClick = 'saveValue(\""+rowId+"\")'/>"
    }
  }
}
//function to save the entered values
function saveValue(rowId) {
  var row = document.getElementById(rowId);
  var nameId = rowId + "0"; 
  var emailId = rowId + "1";
  row.cells[0].innerHTML = "<p>" + document.getElementById(nameId).value + "</p>";
  row.cells[1].innerHTML = "<p>" + document.getElementById(emailId).value + "</p>";
  row.cells[2].innerHTML = "<a href = '#!' onClick='editRow(\""+rowId+"\")'>Edit /</a><a href = '#!' onClick='deleteRow(\""+rowId+"\")'> Delete</a>";
}
//function to edit the saved values
function editRow(rowId) {
  var row = document.getElementById(rowId);
  row.cells[0].innerHTML = "<input  id = '"+rowId+"0' value = '" + row.cells[0].textContent + " '/>";
  row.cells[1].innerHTML = "<input  id = '"+rowId+"1'  value = '" + row.cells[1].textContent + " '/>";
  row.cells[2].innerHTML = "<input   type = 'button'  value = 'Save' onclick = 'saveValue(\"" + rowId + "\")'/>"; 
}
//function to delete rows
function deleteRow(rowId) {
  var row = document.getElementById(rowId);
  var tbody = document.getElementsByTagName('tbody')[0];
  tbody.removeChild(row);
  counter--;
}