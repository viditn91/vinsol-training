$('#blog h3').after('<div class = "target" ></div>')
             .each( function (index) {
             	$(this).click( function(e) {
                e.preventDefault();
                var link = 'blog.html #post' + (index + 1);
                console.log(link);
                $('.target').eq(index).load(link);
             	});
             });