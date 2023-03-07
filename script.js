
// if($(window).width() >= 1200){
//     (function($) {
//         var element = $('.to_move_content'),
//             originalY = element.offset().top;

//         // Space between element and top of screen (when scrolling)
//         var topMargin = 10;

//         // Should probably be set in CSS; but here just for emphasis
//         element.css('position', 'relative');

//         $(window).on('scroll', function(event) {
//             var scrollTop = $(window).scrollTop();

//             element.stop(false, false).animate({
//                 top: scrollTop < originalY
//                     ? 0
//                     : scrollTop - originalY + topMargin
//             }, 0);
//         });
//     })(jQuery);
// }

$(document).scroll(function() {
    var y = $(document).scrollTop(), //get page y value 
        header = $("#myarea"); // your div id
    if(y >= 400)  {
        header.css({position: "fixed", "top" : "0", "left" : "0"});
    } else {
        header.css("position", "static");
    }
});