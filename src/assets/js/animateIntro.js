export const animateIntro = () => {
    const titleTop = document.querySelector('.part-up');
    const titleBottom = document.querySelector('.part-bottom');
    const subtitle = document.querySelector('.intro__bottom');

    const titleTimer = setTimeout(() => {
        titleTop.classList.add('part-up_loaded');
        titleBottom.classList.add('part-bottom_loaded');
        const subtitleTimer = setTimeout(() => {
            subtitle.classList.add('intro__bottom_loaded');
        }, 1000);
    }, 500);

}