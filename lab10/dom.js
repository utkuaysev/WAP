// console.log(document.body);
// console.log(document.head.nodeType);

// console.log(document.getElementById("div1"));
// console.log(document.getElementsByTagName("p"));
// console.log(document.getElementsByClassName("article"));
// console.log(document.querySelector('.article'));
// console.log(document.querySelectorAll('.article'));


// //HTMLCollection
// console.log(document.getElementsByTagName("p"));
// console.log(document.getElementsByClassName("article"));

// //NodeList
// console.log(document.querySelectorAll('.article'));
// console.log(document.getElementsByName("myName"));

// console.log(document.body.childNodes);
// console.log(document.body.children);
// console.log(document.getElementById("div1").innerHTML);
// console.log(document.getElementById("div1").outerHTML);
// console.log(document.getElementById("div1").innerText);
// console.log(document.getElementById("div1").textContent);

// let div = document.getElementById("div1");
// console.log(div.id);
// console.log(div.className);

// let idp = document.getElementById("myName");
// console.log(idp.getAttribute('myattribute'));
// console.log(idp.className);




// console.log(document.body.childNodes);

// for (let e of document.body.childNodes)
//     console.log(e);

// // className
// div = document.getElementsByTagName("p");
// for (let e of div) {
//     e.style.borderLeftWidth = "1px";
//     e.style.borderLeftColor = "red"
// }
// console.log(div.className);

// // classList
// console.log(div.classList);
// div.classList.add("c1");
// div.classList.remove("sub");


let div = document.getElementById("div1")

let HTMLCollection1 = document.getElementsByTagName("p");
let NODELIST1 = document.querySelectorAll("p");

console.log(HTMLCollection1)
console.log(HTMLCollection1.length)

console.log(NODELIST1)
console.log(NODELIST1.length)
document.getElementById("btn1").addEventListener('click', function (e) {

    let newP = document.createElement('p');
    let content = document.createTextNode("New Paragraph");
    newP.appendChild(content);
    div.appendChild(newP)
    console.log(HTMLCollection1)
    console.log(HTMLCollection1.length)

    console.log(NODELIST1)
    console.log(NODELIST1.length)
    // div.remove();
})
