class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed += speed;
        alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        alert(`${this.name} stands still.`);
    }
}
class Rabbit extends Animal {
    hide() {
        alert(`${this.name} hides!`);
    }
    stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
    }
}
rab = new Rabbit("fa");
rab.stop();