//contructor function or Class
function Quiz() {
  this.container         = document.getElementById('container');
  this.textElement       = document.getElementById('content');
  this.userInput         = document.getElementById('userInput');
  this.button            = document.getElementById('submit');
  this.store             = document.getElementById('myTable');
  this.footer            = document.getElementById('footer');
  this.button.addEventListener("click", this.compareResult.bind(this));
  this.counter = 0;
  this.score = 0;
}
//Method of the Class to create a New Question everytime
Quiz.prototype.newScreen = function() {
  this.counter++;
  this.num1              = this.generateNumber(20, 1);
  this.num2              = this.generateNumber(20, 1);
  this.operator          = this.generateNumber(4, 1);
  this.result            = Math.round(this.calculate()*100)/100;
  var operatorArray = ["+", "-", "*", "/"];
  var operatorSymbol = operatorArray[(this.operator) - 1];
  this.questionString =this.num1 +" "+ operatorSymbol + " " + this.num2;
  var inputString = "Question"+this.counter+ ":  WHAT IS  " + this.questionString+ " ??";
  this.textElement.textContent = inputString;
  
}
//Method of the Class to generate a Random Number
Quiz.prototype.generateNumber = function(max, min) {
  var randomNumber = (Math.floor(Math.random() *(max - min + 1) ) + min);
  return randomNumber;
}
//Method of the Class to Calculate the Expression
Quiz.prototype.calculate = function() {
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
//Method of the Class to compare the result with the User Input 
Quiz.prototype.compareResult = function() {
  if (this.userInput.value == this.result) {
    this.score++;
  } else {
    this.storeResult();
  }
  this.userInput.value = null;
  if (this.counter < 19) {
    this.newScreen();
    this.footer.textContent= "SCORE:" + this.score;
  }else if(this.counter == 19){
    this.newScreen();
    this.button.value = "Get Result";
  }
  else {
    this.finalResult();
  }
}
//Method of the Class to save the result in a table named "store" for questions which have been 
// answered incorrectly.
Quiz.prototype.storeResult = function() {
  var row = this.store.insertRow(this.store.rows.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.appendChild(document.createTextNode(this.questionString));
  cell2.appendChild(document.createTextNode(this.result));
}
//Method of the Class to display the Final Result i.e. tha table with unanswered questions and 
// their answers.  
Quiz.prototype.finalResult = function() {
  this.container.style.display = "none";
  this.store.style.display = "block";
}
//Function to create instance of the Class
function initialize() {
  var element = new Quiz();
  element.newScreen();
}
//Onload event to call the function initialize()
window.addEventListener('load',initialize());
