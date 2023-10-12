function Student(fname, sname, ...initGrades){
    this.firstName = fname;
    this.lastName = sname;
    this.grades = [grades];
}

Student.prototype.inputNewGrade = function(grade){
    this.grades.push(grade)
}
Student.prototype.computeAverageGrade = function(grade){
    let sum = 0;
    for (const grade of this.grades) {
        sum += grade;
    }
    return sum / this.grades.length;
}

let st1 = new Student("Bob","Parker",20,21,22)
let st2 = new Student("Tim","Smith",10,11,12)
st1.inputNewGrade(23)
st2.inputNewGrade(13);
console.log(st1)
let students = [st1, st2];
for (const elem of students) {
    console.log(elem.firstName + " " + elem.lastName + ":" + elem.computeAverageGrade())
}
let totalSum = 0;
let totalLen2 = 0;
for (const elem of students) {
    for (const grade of elem["grades"]) {
        totalSum = grade;
    }
    totalLen2 += elem["grades"].length
}
console.log(totalSum / totalLen2)