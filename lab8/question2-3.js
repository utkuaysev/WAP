function Student(fname, sname, ...initGrades){
    this.firstName = fname;
    this.lastName = sname;
    this.grades = initGrades;
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
let st3 = new Student("John","John",14,15,16)
st1.inputNewGrade(23)
st2.inputNewGrade(13);
console.log(st1)
let students = [];
students[0] = st1;
students[1] = st2;
students[2] = st3;
for (const elem of students) {
    console.log(elem.firstName + " " + elem.lastName + ":" + elem.computeAverageGrade())
}
let totalSum = 0;
let totalLen2 = 0;
for (const elem of students) {
    for (const grade of elem["grades"]) {
        totalSum += grade;
    }
    totalLen2 += elem["grades"].length
}
console.log(totalSum / totalLen2)
Array.prototype.sort=function(){
    for(let i = 0; i < this.length - 1 ; i ++){
        for(let j = i + 1; j < this.length; j++ ){
            if(this[j].computeAverageGrade() < this[i].computeAverageGrade()){
                let temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
}
console.log(students)
students.sort()
console.log(students)
