// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default class Slider {
    constructor() {

        const swiper = new Swiper('.swiper', {
            // configure Swiper to use modules
            modules: [Navigation, Pagination],
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            speed: 400,
            spaceBetween: 100,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
    }
}