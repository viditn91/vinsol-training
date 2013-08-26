function MindGame() { 
  scope = this;
  this.myTable = document.getElementById('table');
  this.button  = document.getElementById('start');
  this.button.addEventListener("click", this.onStart.bind(this));
  this.myTable.addEventListener("click", returnClick);
  this.store = new Array(2);
}

var returnClick = function(e) {
  scope.showImage(e.target);
}

MindGame.prototype.onStart = function() {
  this.button.style.display = "none";
  this.myTable.style.display = "block";
  this.counter = 0;
  this.store.splice(0,2);
  }

MindGame.prototype.showImage = function(cell) {
  this.counter++;
  var img = cell.getElementsByTagName('img')[0];
  img.style.display = "block";
  this.store.push(img);
  if(this.counter == 2) {
    this.compareImages();
  }
}
MindGame.prototype.compareImages = function() {
  if(this.store[0].getAttribute('src') != this.store[1].getAttribute('src')) {
    setInterval(console.log('hi'),3000);
    this.store[0].style.display = "none";
    this.store[1].style.display = "none";
    this.onStart();
  }
  else {
    this.onStart();
  }
}
var element = new MindGame();