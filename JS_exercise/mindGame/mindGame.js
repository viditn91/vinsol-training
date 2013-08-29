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
function MindGame() {
  scope = this;
  this.rowCount = 6;
  this.gridSize = (this.rowCount * this.rowCount);
  this.table    = document.getElementById('table');
  this.button   = document.getElementById('start');
  this.delay = 2000;  
  this.button.addEventListener("click", this.displayGrid.bind(this));
  this.table.addEventListener("click", setTargetClass);
}
//Class method to generate a random number
MindGame.prototype.generateRandomNumber = function(max, min) {
  var randomNumber = (Math.floor(Math.random() *(max - min + 1) ) + min);
  return randomNumber; 
}
//Class method to display the grid of images
MindGame.prototype.displayGrid = function() {
  this.numberArray = new Array(this.gridSize);
  for (var i = 0; i < this.gridSize; i++) {
    this.numberArray[i] = i;
    if(i >= this.gridSize/2) {
      this.numberArray[i] = (i - this.gridSize/2)
    }
  } for (var i = 0; i < this.gridSize/2; i++){
    this.reShuffle();
  }
  this.createCellElements();
  this.button.style.display = "none";
  this.table.style.display  = "block";
  this.timer();
}
//Class method to reshuffle the array of numbers
MindGame.prototype.reShuffle = function() {
  var num1 = this.generateRandomNumber((this.gridSize)-1, 0);
  var num2 = this.generateRandomNumber((this.gridSize)-1, 0);
  var temp = this.numberArray[num1];
  this.numberArray[num1] = this.numberArray[num2];
  this.numberArray[num2] = temp;
}

MindGame.prototype.createCellElements = function() {
  for (var i = 0; i < this.rowCount; i++) {
    var row = this.table.insertRow(i);
    for(var j = 0; j < this.rowCount; j++) {
      var cell = row.insertCell(j);
      var img  = document.createElement('img');
      var index = this.numberArray[j + (i*this.rowCount)];
      img.src = jsonData[index]['url'];
      cell.appendChild(img);
      img.id = index;
    }
  }
}
//handler function for the click event
var setTargetClass = function(e) {
  var targetImage    = e.target.childNodes[0];
  var clickedImages = document.getElementsByClassName('clicked');
  if(clickedImages.length <= 1){
    targetImage.className = "clicked";
    scope.matchImages(clickedImages);
  } else {
    targetImage.className = "unclicked";
  }
};
//method to match the two clicked images
MindGame.prototype.matchImages = function (img) {
  if(img.length == 2) {
    if(img[0].id == img[1].id){
      img[0].className = "match";
      img[0].className = "match";
    }else {
      this.incorrectMatch(img[0],img[1]);
    }
  }
}
//method to give a time delay when incorrect match is found
MindGame.prototype.incorrectMatch = function(img1,img2) {
  var timerId = setTimeout(function(){
    img1.className = "unclicked";
    img2.className = "unclicked";
  }, this.delay);
}

MindGame.prototype.updateScore = function() {
  var img = document.getElementsByClassName('match');
  return (img.length/2);
}

MindGame.prototype.finalResult = function() {
  clearInterval(this.interval);
  this.clock.textContent += "  - Puzzle Solved!" 
}

//method of function to start the timer
MindGame.prototype.timer = function() {
  this.clock    = document.getElementById('clock');
  this.score    = document.getElementById('score');
  this.clock.style.display = "block";
  this.score.style.display    = "block";
  this.interval = setInterval('updateTimer()',1000);
}
var seconds = 0;
function updateTimer() {
  seconds++;
  var minutes = Math.floor(seconds / 60);
  var localSeconds = (seconds -(minutes * 60));
  if( localSeconds <= 9) {
    localSeconds = "0" + localSeconds;
  }
  if( minutes <= 9) {
    minutes = "0" + minutes;
  }
  scope.clock.textContent = "Time Taken: " + minutes + " : " + localSeconds;
  scope.score.textContent = "Score: " + scope.updateScore();
  if(scope.updateScore() == scope.gridSize/2) {
    scope.finalResult();
  }
}
//instance of Class
var game = new MindGame();