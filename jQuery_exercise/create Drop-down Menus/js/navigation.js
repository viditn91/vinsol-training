$('#nav li').hover(
  function(){
    $(this).find('ul').css({ 'display' : 'block' });
    $(this).addClass('hover');
  },
  function(){
    $(this).find('ul').css({ 'display' : 'none' });
    $(this).removeClass('hover');
  });