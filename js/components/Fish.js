import { Animal } from './Animal.js';

class Fish extends Animal {
    constructor(name, color, skin) {
        super(name, color, skin);
        this.breed = 'Unknown animal';
        this.environment = 'water';
        this.skin = 'scales';
        this.sound = 'Bul bul 🐟🐠';
    }
}
export { Fish }