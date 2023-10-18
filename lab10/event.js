



// document.getElementById("p1").onclick = callback1;
// document.getElementById("p1").onclick = callback2;

document.body.addEventListener("click", function () {
    console.log("body");
})
document.body.addEventListener("click", function () {
    console.log("body");
}, true) //capturing

document.getElementById("div1").addEventListener("click", function (event) {

    console.log("div1");
}, true)
document.getElementById("div1").addEventListener("click", function () {
    console.log("div1");
}) //bubbling

function callback1(event) {
    event.stopImmediatePropagation();//
    console.log("p1");
}
let p1 = document.getElementById("p1");
p1.addEventListener("click", callback1) //bubbling
p1.addEventListener("click", callback1, true) //capturing
p1.addEventListener("click", callback2, true)
// p1.addEventListener("click", callback2)
// p1.removeEventListener("click", callback1)

function callback2() {
    console.log("p's second event");
}

document.getElementById("submitId").addEventListener("click", function (event) {
    event.preventDefault();

});