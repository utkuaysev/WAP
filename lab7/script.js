function askPassword(ok, fail){
    console.log(this)
    console.log(ok)
    let password = prompt("Password?", 'default');
    if(password == "rockstar") ok();
    else fail();
}
let user = {
    name : 'John',
    loginOk(){
        alert(`${this.name} logged in`);
    },
    loginFail(){
        alert(`${this.name} failed to logged in`);
    }
};
//bind
//loginOk = user.loginOk.bind(user)
//loginFail = user.loginFail.bind(user)
//askPassword(loginOk, loginFail);

//wrapper
//askPassword(() => user.loginOk(),() => user.loginFail());
//askPassword(function () { user.loginOk(); }, function () { user.loginFail(); })

//wrapper + call
//askPassword(() => user.loginOk.call(user),() => user.loginFail.call(user));

//wrapper + apply
askPassword(() => user.loginOk.apply(user),() => user.loginFail.apply(user));

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
