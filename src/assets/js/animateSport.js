export const animateSport = () => {
    try {
        const arrows = document.querySelectorAll('.title-arrow-common');
        const code = document.querySelector('#code-num');

        let num = 910576823;

        window.addEventListener('scroll', () => {
            arrows.forEach(arrow => {
                if (arrow.getBoundingClientRect().top - window.innerHeight < -150) {
                    arrow.classList.add('title-arrow-common_active')
                } else {
                    arrow.classList.remove('title-arrow-common_active')
                }
            })
            
        })
        const numTimer = setInterval(() => {
            code.textContent = String(++num).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        }, 300)

        // window.addEventListener('focus', () => {
        //     clearInterval(numTimer);
        // })  
    } catch (error) {
        console.log(error)
    }
}