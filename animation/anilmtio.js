import { gsap } from "gsap";
import SplitType from "split-type";
import Observer from "./Observer";

export default class Anim extends Observer {
    constructor({ element }) {
        console.log(element);
        super({ element })
        console.log(element);
        this.element = element;
        console.log(element);
        // const splitted = new SplitType(this.element, { types: 'words' });
        // this.sliptWords = new SplitType(splitted.words, { types: 'words' })
    }

    // onEnter() {
    //     gsap.to(this.sliptWords.words, {
    //         y: '0%',
    //         duration: 1.3,
    //         stagger: 0.015,
    //         ease: "power3"
    //     })
    // }


}