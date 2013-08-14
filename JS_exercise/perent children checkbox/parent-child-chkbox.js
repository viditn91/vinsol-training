function displayList(obj) {
  var outerList = document.getElementById(obj.name + "Outer");
  var innerList = document.getElementById(obj.name + "Inner");
  var innerListContent = innerList.getElementsByClassName('inner');
  if(obj.checked) {
    action('block',true);
  }else {
    action('none',false);
  }
function action(displayType,value)
  {
    innerList.style.display = displayType;
    outerList.scrollIntoView(true);
    for (var i = 0; i < innerListContent.length; i++) {
      innerListContent[i].checked = value; 
    }
  }
}