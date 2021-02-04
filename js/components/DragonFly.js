import { Bird } from './Bird.js';

class DragonFly extends Bird {
    constructor(name, color, imposter) {
        super(name, color);
        this.breed = 'Fake bird';
        this.imposter = imposter;
        this.sound = 'Bzz bzz 💸💸';  
    }
    notBird(birdy) {
        if (this.imposter) {
            console.log(`${this.breed} ${this.name} is not a ${birdy}`);
            return true;
        }
        console.log(`${this.breed} ${this.name} is a ${birdy}!`);
    }
}
export { DragonFly }