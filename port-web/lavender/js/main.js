

$(document).ready(function(){
    var containerHeight = $('.header').height();

    $(window).scroll(function(){
        //parallax header
        var wScroll = $(this).scrollTop();
        if(wScroll <= containerHeight) {
            $('.header__middle-1').css({
                'transform': 'translate(0%, '+ (wScroll/40) +'%)'
            });
            $('.header__middle-2').css({
                'transform': 'translate(0%, '+ (wScroll/4) +'%)'
            });
            $('.header__back').css({
                'transform': 'translate(0%, '+ wScroll/80 +'%)'
            });
            $('.header__fore').css({
                'transform': 'translate(0%, -'+ wScroll/50 +'%)'
            });
        }
       
    
        // sticky header 
        
        if(wScroll >= ($('.section-about').offset().top - 50)){
            $('.nav').addClass('nav__sticky');
        } else {
            $('.nav').removeClass('nav__sticky');
        }


        //section new animation - grid

        if(wScroll > $('.section-new .grid-figure').offset().top - $(window).height()/1.2) {
            $('.section-new .grid-figure').each(function(i){
                var elem = $(this)
                setTimeout(function(){
                    elem.addClass('showing');
                }, 250* i+1);
                
            });

        };

        
        //section best-sellers animation - grid

        if(wScroll > $('.section-best .grid-figure').offset().top - $(window).height()/1.2) {
            $('.section-best .grid-figure').each(function(i){
                var elem = $(this)
                setTimeout(function(){
                    elem.addClass('showing');
                }, 250* i+1);
                
            });
        };
        

        //decoration animation-left
        if(wScroll > $('.section-new').offset().top + $(window).height()/20 && wScroll < $('.section-collections').offset().top) {
            $('.decor-left').css({
                // 'transform': 'translate(0%, '+ (wScroll/60) +'%)'
                'transform': 'rotate('+(wScroll/40-45) +'deg)'
            });
        
        };

        //decoration animation-right
        if(wScroll > $('.section-best').offset().top - $(window).height()/3 && wScroll < $('.footer').offset().top) {
            $('.decor-right').css({
                // 'transform': 'translate(0%, '+ (wScroll/60) +'%)'
                'transform': 'rotate('+(-wScroll/30+85) +'deg)'
            });
        
        };

    });

    //login popup
    // $('.login__svg').click(function(){
    //     $('.login__box').fadeToggle();
    // });
    // $(window).click(function(e){
    //     if(e.target == $('.login__box')){
    //         console.log('out');
    //         $('.login__box').hide();

    //     }
    // });



    //login modal
    $('.login__svg').click(function(){
        $('.login__box').toggleClass('visible');
        console.log('visible toggle')
    });
    $(document).click(function(event) {
        //if click on anything except the modal itself or the "open modal" link, close the modal
        if (!$(event.target).closest(".login__box,.login__svg").length) {
          $("body").find(".login__box").removeClass("visible");
          console.log('click ouside')
        }
    });

    //search modal
    $('.search__svg').click(function(){
        $('.search__box').toggleClass('visible');
        console.log('visible toggle')
    });
    $(document).click(function(event) {
        //if click on anything except the modal itself or the "open modal" link, close the modal
        if (!$(event.target).closest(".search__box,.search__svg").length) {
          $("body").find(".search__box").removeClass("visible");
          console.log('click ouside')
        }
    });

    //menu modal
    $('.menu').click(function(){
        $('.nav__menu').toggleClass('visible');
        console.log('visible toggle')
    });
    $(document).click(function(event) {
        //if click on anything except the modal itself or the "open modal" link, close the modal
        if (!$(event.target).closest(".nav__menu,.menu").length) {
          $("body").find(".nav__menu").removeClass("visible");
          console.log('click ouside')
        }
    });

});