import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function sliders() {
    if (document.querySelector('.sliders-addres-min')) {
        const swiperLicenses = new Swiper('.sliders-addres-min-img', {


            // Переключение слайда при клике на него
            // slideToClickedSlide: true,


            // авто прокрутка
            autoplay: {
                // пауза между прокруткой
                delay: 1000,
                // закончить на последнем слайде при отключенной бесконечности
                stopOnLastSlide: true,
                // отключить после ручного переключения
                disableOnInteraction: false
            },

            // скорость прокрутки 
            speed: 800,

            // отключение функционала если слайдов меньше чем надо
            watchOverflow: true,

            // отступы между слайдов
            spaceBetween: 10,


            // // активный слайд по центру
            // // centeredSlides: true,

            // // стартовый слайд
            // initialSlide: 0, // отсчет с 0

            // бесконечный слайд
            loop: true,  // скрол и мультирятность отключить, slidesPerView: auto(нельзя),

            // //     loopedSlides: 1,

            // //автовысота
            // //     autoHeight: true,


            // //     breakpoints: {
            // //       320: {

            // колличество слайдов для показа
            slidesPerView: 1, // если значение авто не забудь про css
            nested: true,

            //колличество пролистываемых слайдов 
            slidesPerGroup: 1,
            effect: 'fade',
            //         loopedSlides: 1,
            //         spaceBetween: 30
            //       },
            //       1440: {
            //         slidesPerView: 2,
            //         loopedSlides: 1
            //       },
            //     }
        });
    }



    // фракция вместо буллетов вывести например 2/6 (ВЕРНИСЬ К ВИДЕО, ТАМ МИНИ УРОК примерно 9.50 минут)
}