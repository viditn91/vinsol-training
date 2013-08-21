//'div' elements of the class 'module'
var $div = $('div.module');
//three ways of obtaining the 3rd list item of '#myList'
var $firstMethod  = $('#myListItem');
var $secondMethod = $('#myList li').eq(2);
var $thirdMethod  = $('li').filter('#myListItem');
//label for search input
var $label = $('#search label');
//hidden elements on the page
var $hiddenElements = $('body').find(':hidden').not('script');
//image elements with 'alt' attribute 
var $img = $("img[alt]");
//odd table rows from the table
var $oddRows = $('tr:odd');