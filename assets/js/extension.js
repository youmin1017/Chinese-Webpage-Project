function includeHTML(StoryId){
	
	var url = "story-" + StoryId;

	if($('#story-iframe').length){
		$('#story-iframe').remove();
	}

	$('#iframe').load("stories/" + url + ".html");
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
    	
    	$('html, body').animate({
    		scrollTop: parseInt($('#posts').offset().top)
    	}, 1000); // scroll to the sory position
 
    	includeHTML(id);
    });

    $('#go-top').click(function(){
    	if( $('#posts').is(":hidden") ){
    		$('#posts').fadeIn(1000);
    		$('#story-iframe').fadeOut(500, function(){
    			$(this).remove();
    		}); // remove the single story frame
    	}
    });
});