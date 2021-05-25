$(function() {
    $('map').imageMapResize();
    $('.map').maphilight()

    $('area').click(function(){
        $('section').toggle(); 
    });
});