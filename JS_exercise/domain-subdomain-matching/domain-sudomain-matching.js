//constructor funtion or class
function Match(formId){
  this.formBox = document.getElementById(formId);
  this.urlField = document.getElementById('url');
  this.formBox.addEventListener("submit", this.extract);
}
//method of the class to extract the Domain/ Subdomain from URL
Match.prototype.extract = function(e) {
  var pattern = /^(?:(?:https?|ftp|file)\:\/\/)?(?:www\.)?(?:([\w\.-]+)\.)?(\w+\.[a-z]{2,4})(?:(?:[\/\w \.-]*)*\/?)?$/i;
  if(pattern.test(newForm.urlField.value)) {
    var domain = RegExp.$2;
    var subdomain = RegExp.$1;
    if (!subdomain) {
      alert("DOMAIN: "+domain);
    }else{
      alert("DOMAIN: "+ domain +" and SUBDOMAIN:" + subdomain);
    }
  } else {
    alert("invalid URL");
    e.preventDefault();
  }
}
//creating new object newForm
var newForm = new Match('formBox');