$(document).ready(function(){
  
  var url = "index.html";

  $(".wrapper").fadeIn(500, function(){
    $(this).on("animationend", function(){
      $(this).fadeOut(2000, function(){
	     $(this).remove();
       window.location.href = url;
      });
    });
  });
});





