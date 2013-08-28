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
    },
    error : function(xhr, status) {
      alert('could not load json!');
    },
    complete : function(xhr, status) {
      alert('The request is complete!');
    }
  }); 
  return data;  
}

$(document).ready(function() {
  //variable to store the JSON
  var jsonData = JSONAjax();

  $('#specials form').after('<div id = "target" ></div>')
                   .find('select[name=day]')
                   //binding the change event
                   .bind({
                    'change' : function (e) {
                      $('#target').empty();
                      selectedOption = $(this).val();
                      if(!selectedOption) {
                        $('#target').html('');
                      } else {
                        $('#target').html(jsonData[selectedOption]['title']
                                    + '</br>' + jsonData[selectedOption]['text']);
                      }
                    }
                  })
                  //removing the button
                  .end()
                  .find('li.buttons')
                  .remove();                   
});

