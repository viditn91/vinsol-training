//constructor funtion or class
function formData(formId){
  this.formBox = document.getElementById(formId);
  this.urlField = document.getElementById('url');
  this.formBox.addEventListener("submit", this.checkUrl);
}
//method of the class to check the url for Domain/ Subdomain
formData.prototype.checkUrl = function(e) {
  var regExp = /^((https?|ftp|file)\:\/\/)?(www\.)?((\w+)(\.))?((\w+)\.([a-z]{2,4}))\/?(\w+\?\=\#\$\^)?/i;
  if(regExp.test(newForm.urlField.value)) {
    var domain = RegExp.$8;
    var subdomain = RegExp.$5;
    if (!subdomain) {
      alert("Domain: "+domain+".com");
    }else{
      alert("Domain: "+domain+".com and Subdomain:"+subdomain);
    }
  }else{
    alert("invalid url");
    e.preventDefault();
  }
}
//creating new object newForm
var newForm = new formData('formBox');