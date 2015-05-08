$(window).load(function(){
    var $bulletin = $('#bulletin');

    // initialize
    $bulletin.masonry({
        "columnWidth": ".grid-sizer",
        "itemSelector": ".bulletin-item",
        "percentPosition": true
    });
});
new WOW().init();
skrollr.init({forceHeight: false});
