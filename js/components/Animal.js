class Animal {
    constructor(name, color, skin) {
        this.breed = 'Unknown animal';
        this.environment = 'Unknown environment';
        this.skin = skin;
        this.name = name;
        this.color = color;
        this.sound = 'Miau au nom 🐈🐕‍🦺🐹 Hello kud ea bz 🦜🐔🦅💸 Bul bul 🐟🐠!';

    }
    voice(){
        console.log(`${this.breed} ${this.name} says: ${this.sound}`);
    }
    introduce() {
        console.log(`Hi, I am ${this.name}, my ${this.skin} is ${this.color} and I say ${this.sound}`);
    }
}
export { Animal }