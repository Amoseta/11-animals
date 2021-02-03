import { Pet } from './Pet.js';

class Dog extends Pet {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Suo';
        this.sound = 'Au au 🐕‍🦺🐕‍🦺!';
    }
}
export { Dog }