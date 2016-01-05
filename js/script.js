$(document).ready(function() {
    
    var muffinHTML = '<img class="muffin galleryimage" src="img/muffin2.png">'

    var add_new_muffin = function( event ) {
    
    	var width = Math.round(Math.random()* 200) + "px"
    	var top = Math.round(Math.random()* 800) + "px"
    	var left = Math.round(Math.random()* 1000) + "px"

        var muffin = $(muffinHTML).css({
        	width: width,
    			left: left,
    			top: top
        });

        $("#projects").append(muffin);
    };

    $("#projects").on("click", ".galleryimage", add_new_muffin);
});