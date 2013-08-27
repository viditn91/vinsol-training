// JSON to store the url of images
var jsonData = [{'url':'image_0.jpg'},
  {'url':'image_1.jpg'},
  {'url':'image_2.jpg'},
  {'url':'image_3.jpg'},
  {'url':'image_4.jpg'},
  {'url':'image_5.jpg'},
  {'url':'image_6.jpg'},
  {'url':'image_7.jpg'},
  {'url':'image_8.jpg'},
  {'url':'image_9.jpg'}, 
  {'url':'image_10.jpg'},
  {'url':'image_11.jpg'},
  {'url':'image_12.jpg'},
  {'url':'image_13.jpg'},
  {'url':'image_14.jpg'},
  {'url':'image_15.jpg'},
  {'url':'image_16.jpg'},
  {'url':'image_17.jpg'}];
//Class or Constructor Function
//correctMatches provides the current score in the game
//for checking the code it can be set to 17 and result can be obtained by matching one pair 
function MindGame() {
  scope = this;
  this.myTable = document.getElementById('table');
  this.button  = document.getElementById('start');
  this.timeSpan = document.getElementById('time');
  this.result = document.getElementById('result');
  this.store = new Array(2);
  this.flag = 0; 
  correctMatches = 0;
  this.button.addEventListener("click", this.begin.bind(this));
  this.myTable.addEventListener("click", returnClick);
}
//class method to generate a random number
MindGame.prototype.generateNumber = function(max, min) {
  var randomNumber = (Math.floor(Math.random() *(max - min + 1) ) + min);
  return randomNumber;
}
//class method to generate an integer array of random numbers from 0-17 
//without any repeatition
MindGame.prototype.generateArray = function() {
  var numberArray = new Array(0);
  var num = 0, 
      search = 0,
      j = 0;
  while (j <= 17) {
    num  = this.generateNumber(17,0);
    search = numberArray.contains(num);
    if (!search){
      numberArray.push(num);
      j++;
    }
  } return numberArray;
}
//method of Array to check if it contains the desired element
Array.prototype.contains = function(obj) {
  var i = this.length;
  while (i--) {
    if (this[i] == obj) {
      return true;
    }
  } return false;
}
//method of the Class to generate a final concatinated array from two gerenerated arrays
MindGame.prototype.generateFinalArray = function() {
  var array1 = this.generateArray();
  var array2 = this.generateArray();
  this.finalArray = array1.concat(array2);
}
//method of the Class to append images in 'td' elements through the JSON
MindGame.prototype.appendImagaes = function() {
  td = document.getElementsByTagName('td');
  for (var i in td) {
    if(i <= 35) { 
      var img = document.createElement('img');
      var jsonValue = this.finalArray[i];
      img.src = jsonData[jsonValue]['url'];
      td[i].appendChild(img);
    }
  }
}
//method of the Class to start the timer and display the table once start button is clicked
MindGame.prototype.begin = function(){
  this.onStart();
  this.outerTimer();
}
//handler function for the click event, returns target element i.e. 'td'
var returnClick = function(e) {
  scope.showImage(e.target);
};

MindGame.prototype.onStart = function() {
  this.button.style.display = "none";
  this.myTable.style.display = "block";
  this.counter = 0;
  this.store.splice(0,2);
}
//method of the class to show the images which are clicked 
//no more than 2 images are shown
MindGame.prototype.showImage = function(cell) {
  if(this.flag == 0){
    this.counter++;
    var img = cell.getElementsByTagName('img')[0];
    img.style.display = "block";
    this.store.push(img);
    if(this.counter == 2) {
      this.flag = 1;
      this.compareImages();
    } 
}
//the two clicked images are compared and hidden again if no match is found
MindGame.prototype.compareImages = function() {
  if(this.store[0].getAttribute('src') != this.store[1].getAttribute('src')) {
    var timerId = setTimeout(function(){
      scope.store[0].style.display = "none";
      scope.store[1].style.display = "none";
      scope.flag = 0;
      scope.onStart();
      }, 2000);   
  } else {
    this.flag = 0;
    this.onStart();
    correctMatches++;
    this.result.textContent = "Score: " + correctMatches + " on 18";
    if(correctMatches == 18) {
      this.showResult();
    }
    }
  }
}
//method of function to start the timer and dislay the time taken and score
MindGame.prototype.outerTimer = function() {
  this.timeSpan.style.display = "block";
  this.result.style.display   = "block";
  this.interval = setInterval('increment()',1000);
}
//method of the class to show the final time taken and hide other elements
MindGame.prototype.showResult = function() {
  clearInterval(this.interval);
  this.timeSpan.textContent += "  - Puzzle Solved!" 
  this.myTable.style.display = "none";
  this.result.style.display = "none";
}
var seconds = 0;
function increment() {
  seconds++;
  var minutes = Math.floor(seconds / 60);
  var localSeconds = (seconds -(minutes * 60));
  if( localSeconds <= 9) {
    localSeconds = "0" + localSeconds;
  }
  if( minutes <= 9) {
    minutes = "0" + minutes;
  }
  scope.timeSpan.textContent = "Time Taken: " + minutes + " : " + localSeconds;
  scope.result.textContent = "Score: " + correctMatches + " on 18";
}
//creating instance of Class
var element = new MindGame();
element.generateFinalArray();
element.appendImagaes();