"use strict"
class Student{
    #studentId
    #answers
    constructor(studentId){
        this.#studentId = studentId;
        this.#answers = []
    }
    addAnswer(question){
        this.#answers.push(question);
    }
    get studentId(){
        return this.#studentId;
    }
    set studentId(studentId){
        this.#studentId = studentId;
    }
    get answers(){
        return this.#answers;
    }
}

class Question{
    #qid
    #answer
    constructor(qid, answer){
        this.#qid = qid;
        this.#answer = answer;
    }
    checkAnswer(answer){
        return answer == this.#answer;
    }
    get qid(){
        return this.#qid;
    }
    get answer(){
        return this.#answer;
    }

}

class  Quiz{
    #questions
    #students
    constructor(questions, students){
        this.#questions = new Map();
        questions.forEach(question => {
            this.#questions.set(question.qid, question.answer)
        });
        this.#students = students
    }
    scoreStudentBySid(sid){
        let studentsWithSid = this.#students.filter(st => st.studentId == sid);
        let student;
        if(studentsWithSid.length == 1){
           student = studentsWithSid[0] 
        }
        else{
            console.log("More than one student with sid:" + sid)
            return;
        }
        return student.answers
            .filter(question => question.checkAnswer(this.#questions.get(question.qid)))
            .length
    }
    getAverageScore(){
        let totalScore = 0;
        students.forEach(student => {
            totalScore += student.answers
                            .filter(question => question.checkAnswer(this.#questions.get(question.qid)))
                            .length
        });
        return totalScore / students.length;
    }
}
const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new
Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5
