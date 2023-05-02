export default class General{
    constructor(){
        let scrollpos = window.scrollY
        const scrollChange = 50

        //The function that will add the class
        const add_class_on_scroll = () => header.classList.add("header-bg-on-scroll")
        const remove_class_on_scroll = () => header.classList.remove("header-bg-on-scroll")

        //Tracking a "scroll" event
        window.addEventListener('scroll', function () {
            scrollpos = window.scrollY;

            //If we scrolled more than we specified in the scrollChange variable, the add class function is executed
            if (scrollpos >= scrollChange) { add_class_on_scroll() }
            else { remove_class_on_scroll() }

        })
        const header = document.querySelector("header")
    }
}