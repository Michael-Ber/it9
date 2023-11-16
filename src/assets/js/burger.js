export const burgerInteraction = () => {
    try {
        const burgerBtn = document.querySelector('.header-burger__btn');
        const menu = document.querySelector('.header-burger__menu');
        const close = document.querySelector('.header-burger__close');

        burgerBtn.addEventListener('click', () => {
            menu.classList.toggle('header-burger__menu_active');
        })
        close.addEventListener('click', () => {
            menu.classList.remove('header-burger__menu_active');
        })
        window.addEventListener('scroll', () => {
            menu.classList.remove('header-burger__menu_active');
        })
    } catch (error) {
        console.log(error)
    }
}