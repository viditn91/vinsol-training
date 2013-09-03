$(function() {
  $('.drag').draggable({
    helper : 'clone',
    revert : 'invalid',
    zIndex : 100,
    drag: function (event,ui) {
      var $element = event.target;
      var index = $($element).closest('ul')[0].id;
      index = index == 1 ? 2 : 1;
      move(index, $element);
    }
  });
  function move (index, element) {
    index = '#'+index;
    $(index).droppable({
      drop: function() {
        $(this).append(element);
      }
    });
  }
});