import { gsap } from "gsap";
import SplitType from "split-type";
import Observer from "./Observer";

export default class TextReveal extends Observer {
    constructor({ element }) {
        super({ element })
        this.element = element;
        const splitted = new SplitType(this.element, { types: 'words' });
        this.sliptWords = new SplitType(splitted.words, { types: 'words' })
    }

    onEnter() {
        gsap.to(this.sliptWords.words, {
            y: '0%',
            duration: 1.3,
            stagger: 0.1,
            ease: "power3"
        })
    }


}