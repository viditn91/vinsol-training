// function to return external JSON
function JSONAjax() {
  var data = "";
  $.ajax({
    url      : 'data/specials.json',
    async    : false,
    type     : 'GET',
    dataType : 'json',
    success  : function (json){
      data = json;
    }
  }); 
  return data;  
}

$(document).ready(function() {
  //variable to store the JSON
  var jsonData = "";
  $('#specials form').after('<div id = "target" ></div>')
                   .find('select[name=day]')
                   //loading the JSON when change is made
                   //this is done only once i.e. when the first change is made
                   .one({
                    'change' : function () {
                      jsonData = JSONAjax();
                    }
                   })
                   //binding change event for every change
                   .bind({
                    'change' : function () {
                      $('#target').empty();
                      selectedOption = $(this).val();
                      if(!selectedOption) {
                        $('#target').html('');
                      } else {
                        $('#target').html(jsonData[selectedOption]['title']
                                    + '</br>' + jsonData[selectedOption]['text']
                                    + '</br><img src = "' +jsonData[selectedOption]['image']
                                    + '">');
                      }
                    }
                   })
                  //removing the button
                  .end()
                  .find('li.buttons')
                  .remove();                   
}); 

