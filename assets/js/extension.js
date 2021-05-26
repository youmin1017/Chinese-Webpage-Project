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


    $('area').click(function(){

    	var str = $(this).attr('id');
    	var id = str.substring(4);    // stories' id

    	if( $('section').is(":visible") ){
    		$('section').fadeOut(1000);
    	}
    	
    	$('html, body').animate({
    		scrollTop: parseInt($('section').offset().top)
    	}, 1000); // scroll to the sory position
 
    	includeHTML(id);
    });

});