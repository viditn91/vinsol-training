//Constructor Function or Class
function ProductData() {
  this.container = document.getElementById('container');
  this.selectBox = document.getElementById('selectBox');
  this.selectBox.addEventListener("change",this.sortIt.bind(this));
  this.jsonData = [{"name":"1","url":"1.jpg","color":"Yellow","brand":"BRAND A","sold_out":"1"},
  {"name":"2","url":"2.jpg","color":"Red","brand":"BRAND B","sold_out":"0"},
  {"name":"3","url":"3.jpg","color":"Green","brand":"BRAND D","sold_out":"0"},
  {"name":"4","url":"4.jpg","color":"Red","brand":"BRAND A","sold_out":"1"},
  {"name":"5","url":"5.jpg","color":"Blue","brand":"BRAND B","sold_out":"0"},
  {"name":"6","url":"6.jpg","color":"Green","brand":"BRAND C","sold_out":"0"},
  {"name":"7","url":"7.jpg","color":"Red","brand":"BRAND C","sold_out":"1"},
  {"name":"8","url":"8.jpg","color":"Blue","brand":"BRAND D","sold_out":"0"},
  {"name":"9","url":"9.jpg","color":"Yellow","brand":"BRAND A","sold_out":"0"},
  {"name":"10","url":"10.jpg","color":"Yellow","brand":"BRAND B","sold_out":"1"},
  {"name":"11","url":"11.jpg","color":"Green","brand":"BRAND D","sold_out":"0"},
  {"name":"12","url":"12.jpg","color":"Yellow","brand":"BRAND D","sold_out":"0"},
  {"name":"13","url":"13.jpg","color":"Blue","brand":"BRAND A","sold_out":"0"},
  {"name":"14","url":"14.jpg","color":"Blue","brand":"BRAND D","sold_out":"0"},
  {"name":"15","url":"15.jpg","color":"Green","brand":"BRAND B","sold_out":"0"},
  {"name":"16","url":"16.jpg","color":"Yellow","brand":"BRAND B","sold_out":"1"},
  {"name":"17","url":"17.jpg","color":"Green","brand":"BRAND A","sold_out":"1"},
  {"name":"18","url":"18.jpg","color":"Blue","brand":"BRAND D","sold_out":"1"},
  {"name":"19","url":"19.jpg","color":"Green","brand":"BRAND C","sold_out":"0"},
  {"name":"20","url":"20.jpg","color":"Yellow","brand":"BRAND A","sold_out":"0"}];
}
//Class method to sort the JSON object according to the option selected in the Select-Box
ProductData.prototype.sortIt = function () {
  var key = this.selectBox.options[this.selectBox.selectedIndex].id;
  if(key != "name") {
    this.sorted = this.jsonData.sort(function compare(a, b) { 
      return b[key] < a[key] ?  1 : b[key] > a[key] ? -1 : 0;
    });
  } else {
    this.sorted = this.jsonData.sort(function compare(a, b) { 
      return parseInt(b[key]) < parseInt(a[key]) ?  1 : parseInt(b[key]) > parseInt(a[key]) ? -1 : 0;
    });
  }
  this.removeGrid();
  this.displayGrid();
}
//Class method to display the images of the sorted JSON Object
ProductData.prototype.displayGrid = function () {
  for (i = 0; i < this.sorted.length; i++) {
    var img = document.createElement('img');
    img.src = this.sorted[i]["url"];
    img.style.height = "100px";
    img.style.width = "100px";
    img.style.margin = "1px";
    this.container.appendChild(img);
  }
}
//Class method to remove the images from the present screen
ProductData.prototype.removeGrid = function () {
  document.body.removeChild(this.container);
  this.container = document.createElement('div');
  this.container.id = "container"; 
  document.body.appendChild(this.container);  
}
//Creating an instance of Class
var element = new ProductData();
//Calling the sortIt method
element.sortIt();