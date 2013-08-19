function DisplayList(obj) {
  this.outerList = document.getElementById(obj.name + "Outer");
  this.innerList = document.getElementById(obj.name + "Inner");
  this.innerListContent = this.innerList.getElementsByClassName('inner');
  this.displayContent(obj.checked);
}

DisplayList.prototype.displayContent= function(value)
{
  this.innerList.style.display = value == true ? 'block' : 'none';
  this.outerList.scrollIntoView(true);
  for (var i = 0; i < this.innerListContent.length; i++) {
    this.innerListContent[i].checked = value; 
  }
} 

function initiate(object) {
  var element = new DisplayList(object);
}