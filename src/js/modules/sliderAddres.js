import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function slider() {
    if (document.querySelector('.sliders-addres')) {
        const swiperLicenses = new Swiper('.slider-addres', {

            navigation: {
                nextEl: '.swiper-button-next'
            },
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