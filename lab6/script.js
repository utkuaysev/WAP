let arr = [1,2,3]
arr[7] = 3;
console.log(arr[1]) 

let person = {
    fullname: "Anna Johns",
    dob: new Date(1993,5 ,5),
    "billing address": 
    [{street:"1000 N 4th", city:"Fairfield", state:"IA", zip:52557},
    {street:"1115 Grenville ave", city:"Fairfield", state:"IA", zip:52556}],
    "shipping address":
    [{street:"2500 N 4th", city:"Fairfield", state:"CA", zip:45667},
    {street:"1115 Grenville ave", city:"Fairfield", state:"CO", zip:52889}]
}
console.log(person.fullname)
console.log(person.dob)
console.log(person["billing address"][0].street)

let user = {name:"john"}
let user_copy = user;
user_copy.name = "bob"
console.log(user)

let x = 12;
let y = x; 
y = 23;
console.log(x)