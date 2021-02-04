import { Bird } from './Bird.js';

class DragonFly extends Bird {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Fake bird';
        this.wingsCount = false;
        this.sound = 'Bzz bzz 💸💸';  
    }
    numberWings(wings){
        if (this.wingsCount) {
            console.log(`${this.name} is not a bird and it has ${wings} wings!`);
            return false;
        }
        console.log(`${this.name} is a bird and it has ${wings} wings!`);
    }
}
export { DragonFly }