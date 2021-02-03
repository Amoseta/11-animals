import { Dog } from './components/Dog.js';
import { Cat } from './components/Cat.js';
import { Hamster } from './components/Hamster.js';
import { Nemo } from './components/Nemo.js';
import { Goldfish } from './components/Goldfish.js';

const rexas = new Dog('Rexas', 'brown');
const pukis = new Cat('Pukis', 'white');
const jorkis = new Hamster('Jorkis', 'golden');
const nemo = new Nemo('Nemo', 'blue');
const golden = new Goldfish('Golden', 'golden');

console.log(rexas);
console.log(pukis);
console.log(jorkis);
console.log(nemo);
console.log(golden);

rexas.voice();
pukis.voice();
jorkis.voice();
nemo.voice();
golden.voice();


rexas.introduce();
pukis.introduce();
jorkis.introduce();
nemo.introduce();
golden.introduce();
golden.makeWish('Gyvo drakono');