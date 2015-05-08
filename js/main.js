new WOW().init();
skrollr.init();

var $bulletin = $('#bulletin');
// initialize
$bulletin.masonry({
    "columnWidth": ".grid-sizer",
    "itemSelector": ".bulletin-item",
    "percentPosition": true
});

