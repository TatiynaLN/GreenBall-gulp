import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function slider() {
    if (document.querySelector('.sliders-addres')) {
        const swiperLicenses = new Swiper('.slider-addres', {

            // стрелки
            navigation: {
                nextEl: '.swiper-button-next',
                //prevEl: '.swiper-button-prev'
            },


            // // буллеты -точки
            // pagination: {
            //     el: '.swiper-pagination',

            //     // Прогрессбар - скрол полоса прокрытки сверху
            //     // type: 'progressbar',


            //     // если подключен Прогрессбар - скрол все что ниже удалить, если надо вывести вместе с точками вернись к видео
            //     clickable: true,
            //     // Динамические буллеты
            //     dynamicBullets: true, // будут изменять свой размер в зависимость от растояния от активной точки
            //     // Кастомные буллеты
            //     renderBullet: function (index, className) {
            //         return '<span class="' + className + '">' + (index + 1) + '</span>';
            //     },
            // },


            // // SCROLLBAR - САМЫЙ НАСТОЯЩИЙ СКРОЛ
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            //     // возможность перетаскивать скролл
            //     draggable: true,
            // },

            // Переключение слайда при клике на него
            slideToClickedSlide: true,

            // // управление клавиатурой 
            // keyboard: {
            //     // вкл/ выкл
            //     enabled: true,
            //     // вкл/ выкл только когда слайдер в пределах вьюпорта
            //     onlyInViewport: true,
            //     // Вкл/выкл управление клавишами pageUp, pageDown
            //     pageUpDown: true,
            // },
            // управление колесом мыши
            mousewheel: {
                //чувствительность колеса
                sensitivity: 1,
                // класс обьекта на катором будет срабатывать прокрутка мышью
                eventsTarget: '.swiper-slide-arrow'
            },

            // авто прокрутка
            // autoplay: {
            //     // пауза между прокруткой
            //     delay: 1000,
            //     // закончить на последнем слайде при отключенной бесконечности
            //     stopOnLastSlide: true,
            //     // отключить после ручного переключения
            //     disableOnInteraction: false
            // },

            // скорость прокрутки 
            // speed: 800,

            // отключение функционала если слайдов меньше чем надо
            watchOverflow: true,

            // отступы между слайдов
            spaceBetween: 30,


            // активный слайд по центру
            centeredSlides: false,

            // стартовый слайд
            initialSlide: 0, // отсчет с 0

            // бесконечный слайд
            loop: true,  // скрол и мультирятность отключить, slidesPerView: auto(нельзя),

            //     loopedSlides: 1,

            //автовысота
            //     autoHeight: true,


            //     breakpoints: {
            //       320: {

            // колличество слайдов для показа
            slidesPerView: 1.4, // если значение авто не забудь про css


            //колличество пролистываемых слайдов 
            slidesPerGroup: 1,

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