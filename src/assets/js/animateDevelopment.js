export const animateDevelopment = () => {
    try {
        const list = document.querySelector('.development__list');
        const listItems = document.querySelectorAll('.development__item');

        window.addEventListener('scroll', () => {
            listItems.forEach(item => {
                if (item.getBoundingClientRect().top - window.innerHeight < -230) {
                    item.style.opacity = 1;
                } else {
                    item.style.opacity = 0;
                }
            })
        })
    } catch (error) {
        console.log(error)
    }
}