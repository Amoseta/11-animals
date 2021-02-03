import { Chicken } from './Bird.js';

class Chicken extends Bird {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Lazy bird';
        this.sound = 'Kud kudaaa 🐔🐔';  
    }
}
export { Chicken }