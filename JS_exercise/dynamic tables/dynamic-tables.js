// global pointer increases/decreases with addition/delition of rows
// used to provide unique id(s) to rows, cols etc.
var counter = 1;
// funtion to create rows
function createRow() {
  var myTable = document.getElementById('table');
  var myTableLength = myTable.rows.length;
  var row = table.insertRow(myTableLength);
  var rowId = "row" + counter;
  row.id = rowId;
  createColumns(rowId,row,"","");
  counter++;
}
//function to create columns 
function createColumns(rowId,row,name,email) {
  var cellName = row.insertCell(0);
  cellName.id = "cellName" + rowId;
  var inputName = document.createElement('input');
  inputName.type = "text";
  inputName.id = "inputName" + rowId;
  inputName.value = name;
  cellName.appendChild(inputName);

  var cellEmail = row.insertCell(1);
  cellEmail.id = "cellEmail" + rowId;
  var inputEmail = document.createElement('input');
  inputEmail.type = "email";
  inputEmail.id = "inputEmail" + rowId;
  inputEmail.value = email;
  cellEmail.appendChild(inputEmail);
  
  var cellSave = row.insertCell(2);
  cellSave.id = "cellSave" + rowId;
  var inputSave = document.createElement('input');
  inputSave.type = "button";
  inputSave.value = "Save";
  inputSave.id = "inputSave" + rowId;
  inputSave.setAttribute("onClick","saveValue('" + rowId +"')");
  cellSave.appendChild(inputSave);
}
//function to save the entered values
function saveValue(rowId) {
  var row = document.getElementById(rowId);
  
  var cellName = document.getElementById("cellName" + rowId);
  var inputName = document.getElementById("inputName" + rowId);
  var inputNameValue = inputName.value;
  cellName.removeChild(inputName);
  cellName.appendChild(document.createTextNode(inputNameValue));
  
  var cellEmail = document.getElementById("cellEmail" + rowId);
  var inputEmail = document.getElementById("inputEmail" + rowId);
  var inputEmailValue = inputEmail.value;
  cellEmail.removeChild(inputEmail);
  cellEmail.appendChild(document.createTextNode(inputEmailValue));

  var cellSave = document.getElementById("cellSave" + rowId);
  var inputSave = document.getElementById("inputSave" + rowId);
  cellSave.removeChild(inputSave);

  var linkEdit = document.createElement('a');
  linkEdit.appendChild(document.createTextNode("Edit "));
  linkEdit.id = "linkEdit" + rowId;
  linkEdit.href = "#!";
  linkEdit.setAttribute("onClick","editRow('" + rowId +"')");
  cellSave.appendChild(linkEdit);

  var linkDelete = document.createElement('a');
  linkDelete.appendChild(document.createTextNode("/ Delete"));
  linkDelete.id = "linkDelete" + rowId;
  linkDelete.href = "#!";
  linkDelete.setAttribute("onClick","deleteRow('"+ rowId +"')");
  cellSave.appendChild(linkDelete);
}
//function to edit the saved values
function editRow(rowId) {
  var row = document.getElementById(rowId);
  var cellName = document.getElementById("cellName" + rowId);
  var cellEmail = document.getElementById("cellEmail" + rowId);
  var cellSave = document.getElementById("cellSave" + rowId);
  var cellNameValue = cellName.textContent;
  var cellEmailValue = cellEmail.textContent;
  row.removeChild(cellName);
  row.removeChild(cellEmail);
  row.removeChild(cellSave);
  createColumns(rowId,row,cellNameValue,cellEmailValue);
}
//function to delete rows
function deleteRow(rowId) {
  var row = document.getElementById(rowId);
  var tbody = document.getElementsByTagName('tbody')[0];
  tbody.removeChild(row);
  counter--;
}
