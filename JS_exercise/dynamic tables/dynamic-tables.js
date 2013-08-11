// global pointer increases/decreases with addition/delition of rows
// used to provide unique id(s) to rows, cols etc.
var counter = 1;
//number of coloums
var colNum = 3;
// funtion to create rows
function createRow() {
  var myTable = document.getElementById('table');
  var myTableLength = myTable.rows.length;
  var row = table.insertRow(myTableLength);
  var rowId = "row" + counter;
  row.id = rowId;
  createColumns(rowId, row, "", "");
  counter++;
}
//function to create columns 
function createColumns(rowId,row,name,email) {
  var cell = [];
  var type = ["text", "email", "button"]; 
  var value = [name, email, "Save"];
  for (var i = 0; i < colNum; i++ ) {
    cell[i] = row.insertCell(i);
    cell[i].id = "cell"+ i + rowId;
    var input = document.createElement('input');
    input.type = type[i];
    input.id = "input"+ i + rowId;
    input.value = value[i];
    if (i == 2) {
      input.setAttribute("onClick","saveValue('" + rowId + "')");
    }
    cell[i].appendChild(input);
  }
}
//function to save the entered values
function saveValue(rowId) {
  for (var i = 0; i < colNum; i++) {
    var row = document.getElementById(rowId);
    var cell = document.getElementById("cell" + i + rowId);
    var input = document.getElementById("input" + i + rowId);
    if (i != 2) {
      var inputValue = input.value;
      cell.removeChild(input);
      cell.appendChild(document.createTextNode(inputValue));
    }
    else {
      cell.removeChild(input);
      createLinks(cell, "Edit ", rowId, "editRow");
      createLinks(cell, "/ Delete", rowId, "deleteRow");
    }
  }
}
//funtion to create links once the save button is clicked
function createLinks(cell, name, rowId, action) {
  var link = document.createElement('a');
  link.appendChild(document.createTextNode(name));
  link.href = "#!";
  link.setAttribute("onClick",action + "('" + rowId +"')");
  cell.appendChild(link);
}
//function to edit the saved values
function editRow(rowId) {
  var row = document.getElementById(rowId);
  var value = [];
  for (var i = 0; i < colNum; i++) {
    var cell = document.getElementById("cell" + i + rowId);
    value[i] = cell.textContent;
    row.removeChild(cell);
  }
  createColumns(rowId,row,value[0],value[1]);
}
//function to delete rows
function deleteRow(rowId) {
  var row = document.getElementById(rowId);
  var tbody = document.getElementsByTagName('tbody')[0];
  tbody.removeChild(row);
  counter--;
}