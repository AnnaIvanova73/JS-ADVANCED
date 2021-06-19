class Cat {
    constructor(name, breed) {
        this.hunger = 100;
        this.name = name;
        this.breed = breed;
    }

    makeSound() {
        console.log(`${this.name} Meow!`);
    }

    get isHungry() {
        return this.hunger > 80;
    }

    set isHungry(value) {
        if (typeof value != 'boolean') {
            return;
        }

        if (value) {
            this.hunger = 100;
        } else {
            this.hunger = 0;
        }
    }
}

let cat1 = new Cat('Nebuchadnezzar', 'persian');
let cat2 = new Cat('Tsutsulan', 'bravo');

cat1.makeSound();
cat2.makeSound();

// Accessor properties
if (cat1.isHungry) {
    // Fead the cat!
    cat1.isHungry = false;
}

console.log(cat1.hunger);

