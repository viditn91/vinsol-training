//Adding effect so that clicking on a headline in the #blog div slides down the excerpt paragraph
$('#blog h2').bind({
  'click' : function() {
    $('#blog p.excerpt').slideDown();
  }
});
//Clicking on another headline slides down its excerpt paragraph, and slide up any other 
//currently showing excerpt paragraphs.
$('#blog a').each(function (index) {
  $(this).bind({
    'click' : function(e) {
      e.preventDefault();
      $(this).closest('li').find('p.excerpt').slideDown();
      $(this).closest('li').siblings().find('p.excerpt').slideUp();      
    }
  });
});