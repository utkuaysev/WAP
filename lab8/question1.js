"use strict";

let studentPrototype = {
    firstName: "John",
    lastName: "Doe",
    grades: [],
    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade: function () {
        let sum = 0;
        for (let element of this.grades) {
            sum += element;
        }
        return this.grades.length > 0 ? sum / this.grades.length : 0;
    },
};

let s1 = Object.create(studentPrototype);
let s2 = Object.create(studentPrototype);
s1.firstName = "Bob"
s2.firstName = "Tim"
s1.lastName = "Parker"
s2.lastName = "Smith"
s1.grades = []; // Initialize a separate grades array for s1
s2.grades = []; // Initialize a separate grades array for s2
s1.inputNewGrade(20);
s1.inputNewGrade(21);
s1.inputNewGrade(22);
s2.inputNewGrade(10);
s2.inputNewGrade(11);
s2.inputNewGrade(12);

let arr = [s1, s2]
for (const elem of arr) {
    console.log(elem.firstName + " " + elem.lastName ":" + elem.computeAverageGrade());
}
let sumAll = 0;
let totalLen = 0;
for (const elem of arr) {
    for (const elemGrade of elem["grades"]) {
        sumAll += elemGrade;
    }
    totalLen += elem["grades"].length;
}
console.log(sumAll / totalLen)