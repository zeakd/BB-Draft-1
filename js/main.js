$(document).ready(function(){
//    var mySwiper = new Swiper ('.swiper-container', {
//      // Optional parameters
//      direction: 'vertical',
//      loop: true
//    })   
	desktop_header.init();
});
$(window).load(function(){
	main_grid_bg.init();
	footer.init();
	desktop_header.init();
	var $bulletin = $('#bulletin');
    // initialize
//    $bulletin.masonry({
//        "columnWidth": ".grid-sizer",
//        "itemSelector": ".bulletin-item",
//        "percentPosition": true
//
//    });
	var $insta = $("#insta");

    new WOW().init();
    if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
        skrollr.init({
            forceHeight : false,
            smoothScrollingDuration : 50
        });
    }
	var $body = $("body").fadeIn(200);
   
});

var main_grid_bg = {
	el : ".main-grid-bg",
	init : function(){
		$el = this.$el = $(this.el);
		$el.attr("data-0", "top : 0px;opacity:1;")
		$el.attr("data-700", "top : -200px;opacity:0.5;")
//		$el.unslider({fluid : 'true'});
	}
}

var desktop_header = {
	el : "#desktop-header",
	init : function(){
		$el = this.$el = $(this.el);	
		$(window).scroll(function(){
			var $window = $(window);
			$window.scrollTop() > 460 ? $el.addClass("fade") 
        : $el.removeClass("fade");
		});
	}
}

var insta = {
	el : '#insta',
	init : function(){
		$el = this.$el = $(this.el);	
		
		$el.masonry({
			"columnWidth" : ".grid-sizer",
			"itemSelector" : ".insta-item",
			"percentPosizion" : true
		});
	}
}

var footer = {
	el : ".footer",
	init : function(){
		$el = this.$el = $(this.el);
		$el.attr("data-0", "bottom : -500px;opacity:0.5;");
		$el.attr("data-1100", "bottom : -200px;");
		$el.attr("data-1600", "bottom : 0px;opacity:1;")
	}
}