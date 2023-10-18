// let animal = {
//     eats: true
// }
// // console.dir(animal)
// // let pro = Object.getPrototypeOf(animal);
// // console.log(pro === Object.prototype)
// let rabbit = {
//     jumps: true
// };
// Object.setPrototypeOf(rabbit, animal);

// let longEar = { earLength: 10 };
// Object.setPrototypeOf(rabbit, longEar);

// console.log(rabbit.eats);
// console.log(rabbit.aa);
// console.log(rabbit.earLength);



// let arr = [1, 2, 3, 4, 5];
// console.dir(arr);
// console.dir(arr.__proto__);
// console.dir(Object.getPrototypeOf(arr));


// let point = { x: 1, y: 2 };
// console.dir(point)
// console.dir(point.__proto__);
// console.dir(Object.getPrototypeOf(point));

// let animal = { eats: true };
// let rabbit = { jumps: true };
// Object.setPrototypeOf(rabbit, animal);
// console.log(rabbit.eats);
// console.dir(rabbit);

// function sum(a, b) {
//     return a + b;
// }
// console.dir(sum)
// console.dir(sum.__proto__);
// console.dir(Object.getPrototypeOf(sum));
// console.dir(sum.prototype);

// console.log(sum.prototype.__proto__ === Object.prototype);

// // let animal = {
// //     eats: true
// // };
// // let rabbit = {
// //     jumps: true
// // };
// // rabbit.__proto__ = animal;
// // // console.log("animal", animal)
// // // console.log("rabbit", rabbit)
// // console.log(rabbit.__proto__)

// // let animal = { eats: true };
// // let rabbit = Object.create(animal);
// // rabbit.jumps = true;
// // console.log(rabbit.eats);
// // console.log(rabbit.jumps);

// function display() {

// }
// console.dir(display);
// console.log(display.prototype);
// console.dir(display.__proto__);


// // let animal = {
// //     eats: true,
// //     walk: function () { alert("Animal walk"); }
// // };

// // let rabbit = Object.create(animal);
// // rabbit.jumps = true;
// // let longEar = Object.create(rabbit);
// // longEar.earLength = 10;
// // longEar.walk();

// // console.log("animal", animal)
// // console.log("rabbit", rabbit)
// // console.log("longEar", longEar)
// // let animal = {
// //     eats: true
// // };
// // let rabbit = Object.create(animal);
// // rabbit.jumps = true;

// // // Object.keys only return own keys
// // // console.log(Object.keys(rabbit));	// jumps

// // // for..in loops over both own and inherited keys
// // for (let prop in rabbit) console.log(prop);

// let head = {
//     glasses: 1
// };

// let table = Object.create(head);
// table.pen = 3;

// let bed = Object.create(table);
// bed.sheet = 1
// bed.pillow = 2


// let pockets = Object.create(bed);
// pockets.money = 2000;

// console.log("expect 3: ", pockets.pen);
// console.log("expect 1: ", bed.glasses);


