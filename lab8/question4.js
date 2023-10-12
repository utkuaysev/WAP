function Animal(name, speed){
    this.name = name;
    this.speed = speed;
}
Animal.prototype.run = function(){
    this.speed++;
}
Animal.compareBySpeed = function(a1, a2){
    if(a1.speed > a2.speed) return 1;
    if(a1.speed < a2.speed) return -1;
    return 0;
}
function Rabbit(name,speed){
    Animal.call(this,name,speed);
}
Rabbit.prototype.hide= function(){
    console.log(this.name + " hides.")
}
Object.setPrototypeOf(Rabbit.prototype,Animal.prototype)
Object.setPrototypeOf(Rabbit,Animal)
let animal1 = new Animal("a1",30)
let animal2 = new Animal("a2",30)
let rabbit1 = new Rabbit("r1",40)
console.log(animal1)
console.log(animal2)
console.log(rabbit1)
console.log(Animal.compareBySpeed(animal1,animal2))
animal1.run();
console.log(Animal.compareBySpeed(animal1,animal2))
rabbit1.hide()
