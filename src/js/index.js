require('polyfill-nodelist-foreach'); // Полифил для поддержки метода forEach в IE11+ и Safari9
require('svgxuse'); // Полифил для поддержки IE11+ и старыми браузерами использования SVG через use 

// import accordion from './modules/accordion.js'; // Аккордион
// import mobileMenu from './modules/mobileMenu'; // Мобильное меню
// import modal from './modules/modal'; // Модалки
// import slider from './modules/slider'; // Слайдер
import sliderAddres from './modules/sliderAddres'; // Слайдер
import slidersAddresMin from './modules/slidersAddresMin'; // Слайдер

// accordion();
// mobileMenu();
// modal();
// slider();
sliderAddres();
slidersAddresMin();