//let Person = class {}; //class expression
class Employee { //class declaration
    #fullname;
    static #counter = 0;
    constructor(name, salary){
        this.salary = salary;
        this.#fullname = name;
        Employee.#incCounter();
        this.sayHi = function(){
            //Employee.prototype.sayHi();
            console.log("emp")} // instance in current object
    }
    calsSalary(){ // instance method
        this.salary; //this refers to current object in Employee.prototype
    }
    sayHi(){console.log("employee prototype")} //instance method in Employee.prototype
    static sayHi(){console.log("Employee")} //static in employee
    static getCounter(){ //static method
        return this.#counter; // this refers to class itself
    }
    static #incCounter(){
        this.#counter++;
    }
    get name(){ //getter
        return this.#fullname;
    }
    set name(n){ //setter
        this.#fullname = n;
    }
    getName(){ // instance method
        return this.#fullname
    }
}

let emp = new Employee("Anna Johns", 150000);
/*
let emp2 = new Employee();
console.log(emp.salary);
//console.log(emp.#fullname) private field
console.log(emp.name)
emp.name = "Smith"
console.log(emp.name)
console.log(typeof Employee);
emp.sayHi(); 
emp2.sayHi();
Employee.sayHi();
console.log(Employee.getCounter());
*/
class Manager extends Employee{
    constructor(name, salary, bonus){
        super(name, salary);
        this.bonus = bonus;
    }

    getBonus(){
        return this.bonus;
    }
    calsSalary(){
        return super.calsSalary() + this.bonus
    }
}
let mg1 = new Manager("Smith Kerry", 170000, 25000)
console.log(mg1.calsSalary());
console.log(mg1.getName());
console.log(mg1 instanceof Manager);
console.log(mg1 instanceof Employee);
console.log(mg1 instanceof Object); 

console.log(emp instanceof Manager);
console.log(emp instanceof Employee);
console.log(emp instanceof Object); 