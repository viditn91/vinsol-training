$(function() {
  var $element = "";
  var target = "";
  $('.drag').draggable({
    helper : 'clone',
    revert : 'invalid',
    zIndex : 100,
    drag: function (event,ui) {
      $element = event.target;
      target = $($element).closest('ul')[0];
    }
  });
  $('.list').droppable({
    drop: function() {
      $(this).append($element);
    }
  });
});