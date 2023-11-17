import { burgerInteraction } from "./burger"
import { animateIntro } from "./animateIntro";
import { animateDevelopment } from "./animateDevelopment";
import { directionSliderInteraction } from "./directionSlider";

window.addEventListener('DOMContentLoaded', () => {
    burgerInteraction();
    animateIntro();
    animateDevelopment();
    directionSliderInteraction();
})