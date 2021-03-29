// Tooltip function show and hide
var screen = [
    'first',
    'center',
    'end'
];
var currentScreen = 1;
$(document).ready(function() {
    $('.tooltip .card').hide();
    var objClick = null;
    $('.tool-tip-button').click(function() {
        $('.tooltip').removeClass('active');
        $('.tooltip .card').fadeOut();
        $(this).siblings('.card').fadeIn('slow');
        $(this).parent().addClass('active');         
    });

    // click out side 
    $(document).mouseup(function(e) {
        var popup = $('.tooltip .card');
        if (!$(e.target).hasClass('tooltip') &&  !$(e.target).hasClass('tool-tip-button')) {
            popup.fadeOut('slow');
            $('.tooltip').removeClass('active');
        }
    });

    // swap function
    if ($('.banner-main.mobile').hasClass('center')) {
        $('.step2').hide();
        $('.step3').show();
        $(window).on("swiperight", swiperightHandler);
        $(window).on("swipeleft", swipeleftHandler);
    }
    $('.screen.first').hide();
    $('.screen.end').hide();

    $('.step-right').click(function(e) {
        swiperightHandler(e);
    });
    $('.step-left').click(function(e) {
        swipeleftHandler(e);
    });


    // Callback function references the event target and adds the 'swiperight' class to it
    function swiperightHandler(e) {
        e.preventDefault();        
        if(currentScreen != 0){
            currentScreen -=1;
            $('#banner-mobile').removeClass().addClass('banner-main mobile '+ screen[currentScreen]);
            $('#banner-mobile .screen').hide();
            $('#banner-mobile .screen.'+screen[currentScreen]).show();
        }
        return false;
    }

    function swipeleftHandler(e) {
        e.preventDefault();
        if(currentScreen < 2 ) {
            currentScreen += 1;
            console.log(currentScreen);
            $('#banner-mobile').removeClass().addClass('banner-main mobile '+ screen[currentScreen]);
            $('#banner-mobile .screen').hide();
            $('#banner-mobile .'+screen[currentScreen]).show();
        }
        return false;
    }
});