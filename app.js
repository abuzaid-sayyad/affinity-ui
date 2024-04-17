$(document).ready(function() {
    $('header ul li .relative').click(function(e) {
        e.stopPropagation(); // Prevent the click event from reaching the document
        $(this).find('.dropdown').toggle();
    });
    $(document).click(function(e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.dropdown').hide();
        }
    });

    // hamberger nav bar start 
    $(".menu").on('click', function () {
        $('.burger-navbar').addClass('active');
        $('.overly-city-selection').addClass('active');
        $(this).addClass('active');
        $('body').addClass('overflow-hidden');
    });
    $("header .close-menu").on('click', function () {
        $('.burger-navbar').removeClass('active');
        $('.overly-city-selection').removeClass('active');
        $(this).removeClass('active');
        $('body').removeClass('overflow-hidden');
    });
    // hamberger nav bar end 


    /*---tabbing ---*/
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });
});