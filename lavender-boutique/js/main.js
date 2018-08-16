$(document).ready(function(){
    var containerHeight = $('.header').height();

    $(window).scroll(function(){
        //parallax header
        var wScroll = $(this).scrollTop();
        if(wScroll <= containerHeight) {
            $('.header__logoBox').css({
                'transform': 'translate(-50%, '+ (-50 + wScroll/4) +'%)'
            });
            $('.header__back').css({
                'transform': 'translate(0%, '+ wScroll/80 +'%)'
            });
            $('.header__fore').css({
                'transform': 'translate(0%, -'+ wScroll/40 +'%)'
            });
        }
       
        
        //sticky header 
        
        if(wScroll >= ($('.section-about p').offset().top - 150)){
            $('.nav__menu').addClass('nav__sticky');
        } else {
            $('.nav__menu').removeClass('nav__sticky');
        }


        //gallery animation

        if(wScroll > $('.gallery-item').offset().top - $(window).height()/1.3) {
            $('.gallery-item').each(function(i){
                var elem = $(this)
                setTimeout(function(){
                    elem.addClass('showing');
                }, 200* i+1);
                
            });
        };
        

    });
});