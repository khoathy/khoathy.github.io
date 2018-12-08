
$(document).ready(function() {
   
    /*Sticky nav*/
    
    $('.js--section-about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    },{
      offset: '60px'
    });
    

    /*Scroll on buttons*/
    $('.js--scroll-to-reservation').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-locations').offset().top}, 500);

    });


    
    $('.js--scroll-to-about').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-about').offset().top}, 500);
        
    });
    
    
    /*Navigation Scroll*/
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
    
    
   /* why does not work nav scroll
   
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    */
    
    
     /*Animation on scroll*/
    $('.js--wp-1').waypoint(function(direction){
         $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset:'70%'
    });
    
    
    $('.js--wp-2').waypoint(function(direction){
         $('.js--wp-2').addClass('animated fadeIn');
    },{
        offset:'70%'
    });
    
    $('.js--wp-3').waypoint(function(direction){
         $('.js--wp-3').addClass('animated shake');
    },{
        offset:'80%'
    });
    

     /*Mobile navigation*/
    $('.js--nav-icon').click(function(){
        var nav= $('.js--main-nav');
        var icon= $('.js--nav-icon i');
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-android-close');
            icon.removeClass('ion-navicon-round');
        } else{
            icon.removeClass('ion-android-close');
            icon.addClass('ion-navicon-round');
        }
        
    });
    
    /*Zoom Gallery*/
    $('.js--gallery').magnificPopup({
        gallery: {
          enabled: true
        },
        delegate:'a',
        type: 'image',
        mainClass: 'mfp-fade mfp-no-margins',
        image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
    });

    /* Typed effect */
    var typed = new Typed('.typed-effect', {
        strings: ["Fresh", "Healthy", "Delicious"],
        startDelay: 700,
        backDelay: 1200,
        typeSpeed: 70,
        backSpeed: 60,
        showCursor: false,
        loop: true,
        shuffle: false,

        });
      
});