import { Parrot } from './Bird.js';

class Parrot extends Bird {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Soundy bird';
        this.sound = 'Hello hello 🦜🦜';  
    }
}
export { Parrot }
