$(document).ready(function () {
	$('#menuID1').click(function () {
		$('#sousMenu1').toggleClass('isOpen');
	});

    $('#menuID2').click(function () {
		$('#sousMenu2').toggleClass('isOpen');
	});

    $('#menuID3').click(function () {
		$('#sousMenu3').toggleClass('isOpen');
	});

    $('#menuID4').click(function () {
		$('#sousMenu4').toggleClass('isOpen');
	});

	$('#menuID1').click(function(){

        if($("#sousMenu2").hasClass('isOpen')){
            $("#sousMenu2").removeClass('isOpen')};
        
        if($("#sousMenu3").hasClass('isOpen')){
           $("#sousMenu3").removeClass('isOpen')};

        if($("#sousMenu4").hasClass('isOpen')){
            $("#sousMenu4").removeClass('isOpen')};

    });

    $('#menuID2').click(function(){

        if($("#sousMenu1").hasClass('isOpen')){
            $("#sousMenu1").removeClass('isOpen')};
        
        if($("#sousMenu3").hasClass('isOpen')){
           $("#sousMenu3").removeClass('isOpen')};

        if($("#sousMenu4").hasClass('isOpen')){
            $("#sousMenu4").removeClass('isOpen')};

    });

    $('#menuID3').click(function(){

        if($("#sousMenu2").hasClass('isOpen')){
            $("#sousMenu2").removeClass('isOpen')};
        
        if($("#sousMenu1").hasClass('isOpen')){
           $("#sousMenu1").removeClass('isOpen')};

        if($("#sousMenu4").hasClass('isOpen')){
            $("#sousMenu4").removeClass('isOpen')};

    });

    $('#menuID4').click(function(){

        if($("#sousMenu2").hasClass('isOpen')){
            $("#sousMenu2").removeClass('isOpen')};
        
        if($("#sousMenu3").hasClass('isOpen')){
           $("#sousMenu3").removeClass('isOpen')};

        if($("#sousMenu1").hasClass('isOpen')){
            $("#sousMenu1").removeClass('isOpen')};

    });

    (function($) {
    
        $(".menuTitles").on('click', function() {
            
            $(this).nextAll('.menuItems').slideToggle(500);
            $(".menuTitles").not(this).nextAll('.menuItems').slideUp(500);
    
        })
    
    })(jQuery);
    
    var myIndex = 0;
    carousel();
    
    function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1].style.display = "block";  
      setTimeout(carousel, 3000); // Change image every 3 seconds
    }
});
