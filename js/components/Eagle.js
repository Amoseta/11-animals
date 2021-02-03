import { Eagle } from './Bird.js';

class Eagle extends Bird {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Soundy bird';
        this.sound = 'Eea eea 🦅🦅';  
    }
}
export { Eagle }