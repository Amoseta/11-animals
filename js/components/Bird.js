import { Animal } from './Animal.js';

class Bird extends Animal {
    constructor(name, color, skin) {
        super(name, color, skin);
        this.breed = 'Unknown animal';
        this.environment = 'air';
        this.skin = 'feathers';
        this.sound = 'Hello kud ea bz 🦜🐔🦅💸';
        this.wingsCount = 2 || false;
    }
    canFly(wings) {
        if (!this.wingsCount) {
            console.log(`${this.breed} ${this.name} is not a bird, but have ${wings} wings!`);
            return false;
        }
        console.log(`${this.breed} ${this.name} is really a bird!`);
    }
}
export { Bird }