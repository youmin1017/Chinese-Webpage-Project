function includeHTML(StoryId){
	
	var url = "story-" + StoryId;

	if($('#story-iframe').length){
		$('#iframe').children('article').fadeOut(2000, function(){
			$(this).remove();
		}); // remove the single story frame
	}

	$('#iframe').load("stories/" + url + ".html", function(){
		$('html, body').animate({
			scrollTop: parseInt($('#story-iframe').offset().top)
		}, 1000); // scroll to the sory position
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
    	includeHTML(id);
    });

    $('#go-top').click(function(){
    	if( $('#posts').is(":hidden") ){
    		$('#posts').fadeIn(2000);
    		$('#iframe').children('article').fadeOut(2000, function(){
    			$(this).remove();
    		}); // remove the single story frame
    	}
    });
});