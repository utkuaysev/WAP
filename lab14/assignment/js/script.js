window.onload = () => {
    display();
    displayDropdowns();
};

async function display() {
    let response = await fetch("http://localhost:5500/students");
    let json;
    if (response.ok) {
        json = await response.json();
        for (let e of json) {
            addRowToTable(e.id, e.name, e.program)
        }
    }
    else alert("Error" + response.status);
}

async function displayDropdowns(){
    let response = await fetch("http://localhost:5500/studentsIds");
    let json;
    if(response.ok){
        json = await response.json();   
        json.forEach(id => {
            addOptionToDropdowns(id)
        });
    }
    else alert("Error" + response.status);
}

async function addStudent(id, name, program) {
    let obj = { id, name, program };
    let setting = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch("http://localhost:5500/students", setting);
    if (response.ok) {
        addRowToTable(id, name, program);
        addOptionToDropdowns(id);
    } else alert("Error " + response.status);
}

async function removeStudent(id){
    let setting = {
        method:"DELETE",
    }
    let response = await fetch("http://localhost:5500/students/" + id, setting);
    if(response.ok){
        removeRowFromTable(id);
        removeOptionFromDropdowns(id);
        return response.json()
    }
}

async function updateStudent(oldId, id, name, program){
    console.log(JSON.stringify({id, name, program}))
    let setting = {
        method:"PUT",
        body: JSON.stringify({id, name, program}),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch("http://localhost:5500/students/" + oldId, setting)
    if(response.ok){
        document.getElementById("tbodyStudentList").innerHTML = "";
        // Get a reference to the select element by its ID
        let dropdown = document.getElementById("ddlStudent");

        // Remove all options from the dropdown
        while (dropdown.options.length > 0) {
            dropdown.remove(0);
        }
        dropdown = document.getElementById("ddlStudentForUpdate");

        // Remove all options from the dropdown
        while (dropdown.options.length > 0) {
            dropdown.remove(0);
        }
        display();
        displayDropdowns();
        alert("updated");
    }
}

function addRowToTable(id, name, program) {
    let row = document.createElement('tr');
    row.setAttribute("id", id);
    for (let e of arguments) {
        let cell = document.createElement('td');
        cell.appendChild(document.createTextNode(e));
        row.appendChild(cell);
    }
    document.getElementById('tbodyStudentList').appendChild(row);
}

function addOptionToDropdowns(id){
    const dropdown = document.getElementById("ddlStudent");
    const optionElement = document.createElement("option");
    optionElement.value = id;
    optionElement.text = id;
    document.getElementById('ddlStudent').appendChild(optionElement);
    document.getElementById('ddlStudentForUpdate').appendChild(optionElement.cloneNode(true));
}

function removeRowFromTable(id){
    var table = document.getElementById("tbodyStudentList");
    var rows = table.getElementsByTagName("tr");
    for(row of rows){
        if(row.getAttribute("id") == id){
            table.removeChild(row);
            break;
        }
    }
}

function removeOptionFromDropdowns(id){
    removeOptionfromDropdown(document.getElementById("ddlStudent"), id);
    removeOptionfromDropdown(document.getElementById("ddlStudentForUpdate"), id);
}

function removeOptionfromDropdown(dropdown,id){
    var options = dropdown.getElementsByTagName("option");
    for(let i = 0; i < options.length; i++){
        const option = options[i];
        if(parseInt(option.value) == parseInt(id)){
            dropdown.remove(i);
            break;
        }
    }
}

document.getElementById('btnRegister').addEventListener("click", () => {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let program = document.getElementById('program').value;
    addStudent(id, name, program);
    document.getElementById('myform').reset()
});

document.getElementById('btnDelete').addEventListener("click", () => {
    let id = document.getElementById('ddlStudent').value;
    console.log(removeStudent(id));
    alert("deleted")
})

document.getElementById('ddlStudentForUpdate').addEventListener("change", () => {
    tableBody = document.getElementById("tbodyStudentList");
    rows = tableBody.getElementsByTagName("tr"); 
    for(row of rows){
        cells = row.getElementsByTagName("td")
        console.log(cells[0].textContent)
        console.log(document.getElementById('ddlStudentForUpdate').value)
        if(cells[0].textContent == document.getElementById('ddlStudentForUpdate').value ){
            document.getElementById("idForUpdate").value = (cells[0].textContent)
            document.getElementById("nameForUpdate").value = (cells[1].textContent)
            document.getElementById("programForUpdate").value = (cells[2].textContent)
        }
    }
})

document.getElementById('btnUpdate').addEventListener("click", () => {
    let id = document.getElementById('ddlStudentForUpdate').value;
    let updatedId = document.getElementById("idForUpdate").value;
    let updatedName = document.getElementById("nameForUpdate").value;
    let updatedProgram = document.getElementById("programForUpdate").value;
    updateStudent(id, updatedId, updatedName, updatedProgram);
    document.getElementById("idForUpdate").value = "";
    document.getElementById("nameForUpdate").value = "";
    document.getElementById('programForUpdate').value = "";

})