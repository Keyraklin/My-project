window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__list'),
    menuItem = document.querySelectorAll('ul'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__list_active');
        })
    })


    
    $(document).ready(function(){
        $('.slider__wrapper').slick({
            speed: 1200,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="img/7-screen/left.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/7-screen/right.png"></button>',
            slidesToShow: 1,
            responsive: [
            {
                breakpoint: 1200,
                settings: {
                arrows: false,
                
                slidesToShow: 1
                }
            },
            {
                breakpoint: 993,
                settings: {
                arrows: false,
                
                slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                arrows: false,
              
                slidesToShow: 1
                }
            },
            {
                breakpoint: 577,
                settings: {
                arrows: false,
                slidesToShow: 1
                }
            }
            ]
        });
    })
})