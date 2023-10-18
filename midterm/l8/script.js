function Person(l, n) {
    this.lastname = l;
    this.firstname = n;
}

Person.compare = function (emp1, emp2) {
    if (emp1.salary > emp2.salary) return 1;
    else if (emp1.salary < emp2.salary) return -1;
    else return 0;
}

Person.prototype.display = function () {
    console.log(this.firstname, this.lastname);
}

function Employee(l, n, s) {
    Person.call(this, l, n);
    this.salary = s;
}

Employee.prototype.displaySalary = function () {
    console.log(this.salary);
}

Object.setPrototypeOf(Employee, Person);
Object.setPrototypeOf(Employee.prototype, Person.prototype);

let emp1 = new Employee("John", "Doe", 78000);
emp1.displaySalary();
emp1.display();

let emp2 = new Employee("Anna", "Smith", 150000);
let emp3 = new Employee("Tom", "Jerry", 98000);

let arr = [emp1, emp2, emp3];

let person1 = new Person("Smith", "Tom");


arr.sort(Person.compare);
console.log(arr);

let a = Employee.compare(emp1, emp2);
console.log(a)