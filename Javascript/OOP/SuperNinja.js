// parent Ninja class
class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strengh = 3;
    }

    ninjaInfo(){
        console.table([this.name, this.health, this.speed, this.strengh]);
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log("Name:", this.name, "Health:", this.health, "Speed:", this.speed,  "Strength:", this.strengh);
    }
    drinkSake() {
        this.health += 10;
        console.log(this.health);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

// child Sensei class
class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10) {
        super(name);
        this.health = health;
        this.speed = speed;
        this.strengh = strength;
        this.wisdom = wisdom;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.sayName();
superSensei.ninjaInfo();
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
