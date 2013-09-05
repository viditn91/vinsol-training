$(function() {
  $('.drag').draggable({
    helper : 'clone',
    revert : 'invalid',
    zIndex : 100,
    drag: function (event, ui) {
      $('ul.list').addClass('active');
      var $element = event.target;
      $($element).closest('ul').removeClass('active');
      move($element);
    }
  });
  function move (element) {
    $('.active').droppable({
      drop: function() {
        $(this).append(element);
      }
    });
  }
});