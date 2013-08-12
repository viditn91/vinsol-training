//function to obtain the URL
function getUrl(){
  do {
    var url = prompt("enter url");
    if (!url || !url.trim()){
      alert("entered value is empty or consists of only spaces");
    }
    else {
      window.open(url,'','height=450,width=400,location=0,scrollbars=0,menubar=0,status=0,titlebar=0,toolbar=0');
    }
  }while(!url || !url.trim());
  return url;
}
//Creating an event
window.addEventListener("load",getUrl);