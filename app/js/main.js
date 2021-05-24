$(function () {

    $('select').styler();

    $('.specialties__slider').slick({
        arrows: false,
        dots: true        
    });

    $('.header__nav-btn').on('click', function() {
        $('.header__nav').toggleClass('header__nav--open');
    })

    var mixer = mixitup('.menu__inner', {
        load: {
            filter: '.soupe',
        }
    });


})