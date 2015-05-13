$(document).ready(function(){
//    var mySwiper = new Swiper ('.swiper-container', {
//      // Optional parameters
//      direction: 'vertical',
//      loop: true
//    })   
    $(window).scroll(function(){
        var $window = $(window);
        var $desktopHeader = $("#desktop-header");
        $window.scrollTop() > 460 ? $desktopHeader.addClass("fade") 
        : $desktopHeader.removeClass("fade");
});

});

$(window).load(function(){
    var $body = $("body").fadeIn(200);
    var $bulletin = $('#bulletin');
    
    // initialize
    $bulletin.masonry({
        "columnWidth": ".grid-sizer",
        "itemSelector": ".bulletin-item",
        "percentPosition": true

    });
    $(".main-grid-bg").unslider({fluid : 'true'});
    new WOW().init();
    if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
        skrollr.init({
            forceHeight : false,
            smoothScrollingDuration : 50
        });
    }
});



