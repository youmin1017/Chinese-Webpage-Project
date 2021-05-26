// function AreaClicked(id){
// 	$('section').fadeOut(1000);
	
// 	$('html, body').animate({
// 		scrollTop: parseInt($("section").offset().top)
// 	}, 1000);
	
// 	// $.get("story-01.html", function(data){
// 	// 	$("#iframe").html(data);
// 	// });
// }

$(function() {
    $('map').imageMapResize();
    $('.Mainmap').maphilight();

    $('#iframe').load("stories/story-01.html");

});