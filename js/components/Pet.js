import { Animal } from './Animal.js';

class Pet extends Animal {
    constructor(name, color, skin) {
        super(name, color, skin);
        this.breed = 'Unknown animal';
        this.environment = 'land';
        this.skin = 'fur';
        this.sound = 'Miau au nom 🐈🐕‍🦺🐹!';
    }
}
export { Pet }