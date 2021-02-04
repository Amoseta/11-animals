import { Dog } from './components/Dog.js';
import { Cat } from './components/Cat.js';
import { Hamster } from './components/Hamster.js';
import { Nemo } from './components/Nemo.js';
import { Goldfish } from './components/Goldfish.js';

import { Parrot } from './components/Parrot.js';
import { Chicken } from './components/Chicken.js';
import { Eagle } from './components/Eagle.js';
import { DragonFly } from './components/DragonFly.js';

const rexas = new Dog('Rexas', 'brown');
const pukis = new Cat('Pukis', 'white');
const jorkis = new Hamster('Jorkis', 'golden');
const nemo = new Nemo('Nemo', 'blue');
const golden = new Goldfish('Golden', 'golden');

const roma = new Parrot('Roma', 'yellow');
const grude = new Chicken('Grude', 'black');
const jack = new Eagle('Jack', 'white necked and black');
const humor = new DragonFly('Humor', 'green');


console.log(rexas);
console.log(pukis);
console.log(jorkis);
console.log(nemo);
console.log(golden);

console.log(roma);
console.log(grude);
console.log(jack);
console.log(humor);

rexas.voice();
pukis.voice();
jorkis.voice();
nemo.voice();
golden.voice();

roma.voice();
grude.voice();
jack.voice();
humor.voice();

rexas.introduce();
pukis.introduce();
jorkis.introduce();
nemo.introduce();
golden.introduce();
golden.makeWish('Gyvo drakono');

roma.introduce();
grude.introduce();
jack.introduce();
humor.introduce();
humor.notBird('tai ne paukstis');

