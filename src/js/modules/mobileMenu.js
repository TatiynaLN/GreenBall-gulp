export default function mobileMenu() {

    if (document.getElementById('menu__button')) {
        const hamburger = document.getElementById('menu__button');
        const mobileMenu = document.querySelector('.header__inner');
        const mobileMenuItems = document.querySelectorAll('.menu-item');
        const htmlElement = document.getElementsByTagName('html')[0];
        const overlayMenu = document.querySelector('.overlay-burger');

        const body = document.body;
        let screenWidth = window.innerWidth;

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('header__inner--active');
            overlayMenu.classList.toggle('overlay-burger--active');
            body.classList.toggle('no-scroll');
            htmlElement.classList.toggle('no-scroll');
        });

        overlayMenu.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('header__inner--active');
            overlayMenu.classList.remove('overlay-burger--active');
            body.classList.remove('no-scroll');
            htmlElement.classList.remove('no-scroll');
        });

        window.addEventListener('resize', () => {
            screenWidth = window.innerWidth;

            if (screenWidth < 1340) {
                linksClick();
            }

            if (screenWidth >= 1340) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('header__inner--active');
                overlayMenu.classList.remove('overlay-burger--active');
                body.classList.remove('no-scroll');
                htmlElement.classList.remove('no-scroll');
            }
        });

        function linksClick() {
            mobileMenuItems.forEach(link => {
                link.addEventListener('click', (e) => {
                    if (screenWidth < 1024) {
                        hamburger.classList.remove('active');
                        mobileMenu.classList.remove('header__inner--active');
                        overlayMenu.classList.remove('overlay-burger--active');
                        body.classList.remove('no-scroll');
                        htmlElement.classList.remove('no-scroll');
                    }
                });
            });
        }
        linksClick();
    }
}
