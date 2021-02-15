$(document).ready(function(){
    $('.slider__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/3-screen/left arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/3-screen/right arrow.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: false,
                  mobileFirst: true,
                  
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: false,
                  mobileFirst: true,
                }
              },
              {
                breakpoint: 576,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
    });
});