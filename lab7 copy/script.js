function askPassword(ok, fail){
    let password = prompt("Password?", 'default');
    if(password == "rockstar") ok();
    else fail();
}
let user = {
    name : 'John',
    loginOk(){
        let str = this.name
        alert(str + " logged in");
    },
    loginFail(){
        let str = this.name
        alert(str + " failed to log in");
    }
};
//loginOk = user.loginOk.bind(user)
//loginFail = user.loginFail.bind(user)
askPassword(loginOk, loginFail);

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
        const anonymousFunc = function(student) {
            console.log(this.title + ": " + student);
        };
        let binded = anonymousFunc.bind(this);
        this.students.forEach(binded);
    }
};
group.showList()
