$(document).ready(function(){
    //background animation
    var layer1 = $('.layer1');
    var layer2 = $('.layer2');
    var layer3 = $('.layer3');
    var layer4 = $('.layer4');
    var layer5 = $('.layer5');



    var home = $('.section-home');

    home.mousemove(function(e){
        mouseParallax(e,320,200,layer1);
        mouseParallax(e,200,50,layer2);
        mouseParallax(e,45,80,layer3);
        mouseParallax(e,30,30,layer4);
        mouseParallax(e,15,20,layer5);
    });

    function mouseParallax(event,speedX,speedY,layer){
        var valueX = (event.pageX * 1/speedX);
        var valueY = (event.pageY * 1/speedY);
        layer.css({
            'transform':'translate('+valueX+'px,'+valueY+'px)'
        });
    };

    //navigation menu 
    $('.nav__icon-menu').click(function(){
        $('.nav__list').toggleClass('visible');
        $('.nav__overlay').toggleClass('nav__overlay-scale');
    });
    $(document).click(function(event) {
        //if click on anything except the modal itself or the "open modal" link, close the modal
        if (!$(event.target).closest(".nav__icon-menu").length) {
          $('body').find('.nav__list').removeClass('visible');
          $('body').find('.nav__overlay').removeClass('nav__overlay-scale');
          
        }
    });

});


//snap svg card hover
(function() {
	
	function init() {
		var speed = 250,
			easing = mina.easeinout;

		[].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
			var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
				pathConfig = {
					from : path.attr( 'd' ),
					to : el.getAttribute( 'data-path-hover' )
				};

			el.addEventListener( 'mouseenter', function() {
				path.animate( { 'path' : pathConfig.to }, speed, easing );
			} );

			el.addEventListener( 'mouseleave', function() {
				path.animate( { 'path' : pathConfig.from }, speed, easing );
			} );
		} );
	}

	init();

})();


