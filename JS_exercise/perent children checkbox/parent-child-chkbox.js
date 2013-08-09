function displayList(obj) {
  var outerList = obj.parentNode;
  var ul = outerList.getElementsByTagName('ul')[0];
  var li = ul.getElementsByTagName('li');
  if(obj.checked == true) {
    action('block',true);
  }else {
    action('none',false);
  }
  function action(displayType,value)
  {
    ul.style.display = displayType;
    outerList.scrollIntoView(true);
    for (var i = 0; i < li.length; i++) {
      var innerBox = li[i].getElementsByTagName('input');
      innerBox[0].checked = value; 
    }
  }
}