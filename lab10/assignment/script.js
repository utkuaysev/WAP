let tbody = document.getElementById("tbodyPatientsList")
let arr = [ 
    ["EP-001-000001",
    "Ana",
    "J",
    "Smith",
    "5 January 1945",
    "Ear, Nose and Throat",
    "No"],
    ["P-001-000002",
    "Bob",
    "K",
    "Jones",
    "4 May 1985",
    "Cardiology",
    "Yes" ],
    ["EP-001-000003",
    "Carlos",
    "A",
    "Hernandez",
    "13 March 1957",
    "Cardiology",
    "Yes"]
   ]
arr.forEach(patient => {
    let newtr = document.createElement("tr");
    patient.forEach(element => {
        let newtd = document.createElement("td")
        let content = document.createTextNode(element);
        newtd.appendChild(content)  
        newtr.appendChild(newtd);                        
    });
    tbody.appendChild(newtr)
});
const form  = document.getElementById("registerForm");
form.addEventListener("submit", function (event) {
/*
    if (!form.checkValidity()) {
        return;
    }
*/
    event.preventDefault(); // Prevent form submission
    let HTMLCollection1 = document.getElementById("registerForm");
    let x = HTMLCollection1.getElementsByTagName("input");
    let newtr = document.createElement("tr");
    for (let elem of x) {
        let elem_val = elem.value
        let newtd = document.createElement("td")
        if(elem.id == "dateOfBirth"){
            elem_val = formatDate(elem_val);
        }
        let content = document.createTextNode(elem_val);
        newtd.appendChild(content)  
        newtr.appendChild(newtd);                        
    }
    tbody.appendChild(newtr)
});

const checkbox = document.getElementById('chkElderlyPatients')

checkbox.addEventListener('change', (event) => {
    let x = document.getElementById("tbodyPatientsList");
    for(elem of x.rows){  
        let datee = elem.childNodes[4].innerText
        let y1 = new Date().getFullYear();
        let y2 = parseInt(datee.split(" ")[2])
        let age = y1 - y2;
        if (event.currentTarget.checked && age < 65) {
            elem.style.display="none"
        } else {
            elem.style.display=""
        }
    }
});

const checkbox2 = document.getElementById('chkShowOutPatients')

checkbox2.addEventListener('change', (event) => {
    let x = document.getElementById("tbodyPatientsList");
    for(elem of x.rows){  
        let outData = elem.childNodes[6].innerText
        console.log(outData)
        if (event.currentTarget.checked && outData == "No") {
            elem.style.display="none"
        } else {
            elem.style.display=""
        }
    }
});


function formatDate(inputDate) {
    const dateParts = inputDate.split('-');
    if (dateParts.length !== 3) {
      return 'Invalid Date';
    }
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
    const year = dateParts[0];
    const month = months[parseInt(dateParts[1])];
    const day = dateParts[2];
  
    return `${day} ${month} ${year}`;
  }