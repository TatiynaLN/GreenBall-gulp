import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function slider() {
    if (document.querySelector('.sliders-addres')) {
        const swiperLicenses = new Swiper('.slider-addres', {

            // // // Переключение слайда при клике на него
            // // slideToClickedSlide: true,

            // // //     // // управление клавиатурой 
            // // //     // keyboard: {
            // // //     //     // вкл/ выкл
            // // //     //     enabled: true,
            // // //     //     // вкл/ выкл только когда слайдер в пределах вьюпорта
            // // //     //     onlyInViewport: true,
            // // //     //     // Вкл/выкл управление клавишами pageUp, pageDown
            // // //     //     pageUpDown: true,
            // // //     // },
            // // //     // управление колесом мыши
            // // mousewheel: {
            // //     //         //чувствительность колеса
            // //     sensitivity: 1,
            // //     //         // класс обьекта на катором будет срабатывать прокрутка мышью
            // //     eventsTarget: '.swiper-slide-arrow'
            // // },

            // // //     // скорость прокрутки 
            // // //     // speed: 800,

            // // // отключение функционала если слайдов меньше чем надо
            // // // watchOverflow: true,

            // // // отступы между слайдов
            // // spaceBetween: 113,




            // loopedSlides: 1,

            // // //автовысота
            // // //     autoHeight: true,


            // // //     breakpoints: {
            // // //       320: {



            // //колличество пролистываемых слайдов 
            // slidesPerGroup: 1,
            // breakpoints: {
            //     //1440: {
            //     //         slidesPerView: 2,
            //     //         loopedSlides: 1
            //     //       },
            // }
            // //         loopedSlides: 1,
            // //         spaceBetween: 30
            // //       },
            // //       1440: {
            // //         slidesPerView: 2,
            // //         loopedSlides: 1
            // //       },
            // //     }
            // // стрелки
            navigation: {
                nextEl: '.swiper-button-next'
            },
            // активный слайд по центру
            //centeredSlides: true,
            // стартовый слайд
            initialSlide: 1, // отсчет с 0

            // бесконечный слайд
            loop: true,  // скрол и мультирятность отключить, slidesPerView: auto(нельзя),
            // колличество слайдов для показа
            slidesPerView: 1, // если значение авто не забудь про css
            // отступы между слайдов
            spaceBetween: 30,
            breakpoints: {
                768: {
                    // колличество слайдов для показа
                    slidesPerView: 1.6,
                },
                1024: {
                    // колличество слайдов для показа
                    slidesPerView: 1.6,
                    spaceBetween: 50,
                },
                1600: {
                    // колличество слайдов для показа
                    slidesPerView: 1.6,
                    spaceBetween: 113,
                },
            }
        });
    }



    // фракция вместо буллетов вывести например 2/6 (ВЕРНИСЬ К ВИДЕО, ТАМ МИНИ УРОК примерно 9.50 минут)
}