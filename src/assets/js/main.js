import { burgerInteraction } from "./burger"
import { animateIntro } from "./animateIntro";
import { animateDevelopment } from "./animateDevelopment";
import { directionSliderInteraction } from "./directionSlider";
import { animateSport } from "./animateSport";
import { workusSliderInteraction } from "./workusSlider";
import { workusSliderSwiperInteraction } from "./workusSliderSwiper";
import { directionSliderSwiperInteraction } from "./directionSliderSwiper";

window.addEventListener('DOMContentLoaded', () => {
    burgerInteraction();
    animateIntro();
    animateDevelopment();
    // directionSliderInteraction();
    animateSport();
    // workusSliderInteraction();
    directionSliderSwiperInteraction()
    // workusSliderSwiperInteraction();
})