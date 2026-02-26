(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').off('mouseenter mouseleave').on('mouseenter', function () {
                    const $dropdown = $(this);
                    const $menu = $dropdown.find('.dropdown-menu').first();
                    $dropdown.addClass('show');
                    $dropdown.find('.dropdown-toggle').attr('aria-expanded', 'true');
                    $menu.stop(true, true).slideDown(200).addClass('show');
                }).on('mouseleave', function () {
                    const $dropdown = $(this);
                    const $menu = $dropdown.find('.dropdown-menu').first();
                    $menu.stop(true, true).slideUp(200, function () {
                        $menu.removeClass('show');
                        $dropdown.removeClass('show');
                        $dropdown.find('.dropdown-toggle').attr('aria-expanded', 'false');
                    });
                });
            } else {
                $('.navbar .dropdown').off('mouseenter mouseleave');
                $('.navbar .dropdown-menu').removeAttr('style');
            }
        }

        toggleNavbarMethod();
        $(window).on('resize', toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);

