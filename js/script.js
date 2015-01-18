
jQuery(document).ready(function ($) {

    var animated_element = $('.animated');

    function image_animation() {
        animated_element.each(function () {
            var get_offset = $(this).offset();
            if ($(window).scrollTop() + $(window).height() > get_offset.top + $(this).height() / 2) {
                $(this).addClass('animation_started');
                setTimeout(function () {
                    $(this).removeClass('animated').removeAttr('style');
                }, 300);
            }
        });
    }

    $(window).scroll(function () {
        image_animation();
    });

    $(window).load(function () {
        setInterval(image_animation, 300);
    });

});