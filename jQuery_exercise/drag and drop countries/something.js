$(function() {
  $('.drag').draggable({
    helper : 'clone',
    revert : 'invalid',
    zIndex : 100,
    drag: function (event, ui) {
      $('ul').addClass('list');
      var $element = event.target;
      $($element).closest('ul').removeClass('list');
      move($element);
    }
  });
  function move (element) {
    $('.list').droppable({
      drop: function() {
        $(this).append(element);
      }
    });
  }
});