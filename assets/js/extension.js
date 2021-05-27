function includeHTML(StoryId){
	
	var url = "story-" + StoryId;

	$('#iframe').load("stories/" + url + ".html", function(){
		$(this).fadeIn(1000);
		setTimeout(function(){
			$('html, body').animate({
				scrollTop: parseInt($('#story-iframe').offset().top)
			}, 1000); // scroll to the sory position
		}, 100);
	});
}

$(function() {
	$('map').imageMapResize();
	$('.Mainmap').maphilight();

	$(window).scroll(function() {
    	
    	var h = $(window).scrollTop();  // gain height realtive to top
		
		if ( h > $('#main-pic').offset().top ) {
			$('.go-top').fadeIn(500);
		}  // if h > main image show it
		else {
			$('.go-top').fadeOut(500);
		}
	});


    $('area').click(function(){

    	var str = $(this).attr('id');
    	var id = str.substring(4);    // stories' id

    	if( $('#posts').is(":visible") ){
    		$('#posts').fadeOut(1000);
    	}
    	else{
    		$('#iframe').fadeOut(1000, function(){
    			$(this).remove('article');
    		}); // remove the single story frame
    	}
    	includeHTML(id);
    });

    $('#go-top').click(function(){    	
    	if( $('#posts').is(":hidden") ){
    		
    		$('#iframe').children('article').fadeOut(1000, function(){
    			$(this).remove();
    			$('#posts').fadeIn(1000);
    		}); // remove the single story frame

    		setTimeout(function(){
    			$('html, body').animate({
    				scrollTop: parseInt($('#main-pic').offset().top)
    			}, 1000); // scroll to main image
    		}, 300); //delay one second
    	}
    	else{
    		$('html, body').animate({
    			scrollTop: parseInt($('#main-pic').offset().top)
    		}, 1000);
    	}
    });
});