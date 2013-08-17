var counter = 0;
var score = 0;

function CreateScreen() {
  this.container         = document.getElementById('container');
  this.textElement       = document.getElementById('content');
  this.userInput         = document.getElementById('userInput');
  this.button            = document.getElementById('submit');
  this.store             = document.getElementById('myTable');
  this.footer            = document.getElementById('footer');
  this.button.addEventListener("click", this.compareResult.bind(this));
}

CreateScreen.prototype.newScreen = function() {
  counter++;
  this.num1              = this.generateNumber(20, 1);
  this.num2              = this.generateNumber(20, 1);
  this.operator          = this.generateNumber(4, 1);
  this.result            = Math.round(this.calculate()*100)/100;
  var operatorArray = ["+", "-", "*", "/"];
  var operatorSymbol = operatorArray[(this.operator) - 1];
  this.questionString =this.num1 +" "+ operatorSymbol + " " + this.num2;
  var inputString = "Question"+counter+ ":  WHAT IS  " + this.questionString+ " ??";
  this.textElement.textContent = inputString;
  
}

CreateScreen.prototype.generateNumber = function(max, min) {
  var randomNumber = (Math.floor(Math.random() *(max - min + 1) ) + min);
  return randomNumber;
}

CreateScreen.prototype.calculate = function() {
  switch(this.operator){
    case 1 :
    return (this.num1 + this.num2);
    break;
    case 2 :
    return (this.num1 - this.num2);
    break;
    case 3 :
    return (this.num1 * this.num2);
    break;
    case 4:
    return (this.num1 / this.num2);
    break;
  }
}

CreateScreen.prototype.compareResult = function() {
  if (this.userInput.value == this.result) {
    score++;
  } else {
    this.storeResult();
  }
  this.userInput.value = null;
  console.log(counter,score,this.result);
  if (counter < 19) {
    this.newScreen();
    this.footer.textContent= "SCORE:" + score;
  }else if(counter == 19){
    this.newScreen();
    this.button.value = "Get Result";
  }
  else {
    this.finalResult();
  }

}

CreateScreen.prototype.storeResult = function() {
  var row = this.store.insertRow(this.store.rows.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.appendChild(document.createTextNode(this.questionString));
  cell2.appendChild(document.createTextNode(this.result));
}

CreateScreen.prototype.finalResult = function() {
  this.container.style.display = "none";
  this.store.style.display = "block";
}

function initialize() {
  var element = new CreateScreen();
  element.newScreen();
  
}

window.addEventListener('load',initialize());
