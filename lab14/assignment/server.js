const express = require('express');
const cors = require('cors'); // Import the 'cors' middleware.

const app = express();
app.use(cors());

const port = 5500;

// Enable JSON parsing for request bodies
app.use(express.json());

// In-memory data store for simplicity (replace with a database in a real project)
const students = [
    {id:"1", name:"Student1", program:"Compro"},
    {id:"2", name:"Student2", program:"Compro"},
    {id:"3", name:"Student3", program:"MBA"}
];

// Route to handle POST requests for adding students
app.post('/students', (req, res) => {
    const newItem = req.body;
    students.push(newItem);
    res.status(201).json(newItem); // Respond with HTTP status 201 (Created) and the created item.
});

// Route to handle GET requests for fetching students
app.get('/students', (req, res) => {
    res.status(200).json(students);
});

app.get('/studentsIds', (req,res) =>{
    studentsIds = students.map(s => s.id);
    res.status(200).json(studentsIds);
})

app.delete('/students/:id', (req,res) => {
    const id = req.params.id
    studentIndex = students.findIndex(s => s.id == id );
    const student = students[studentIndex];
    if(studentIndex == -1){
        res.status(404).json({message:"Stundent is not found."})
    }
    students.splice(studentIndex, 1);
    res.status(200).json(student);
})

app.get('/students/:id', (req,res) => {
    const id = req.params.id
    studentIndex = students.findIndex(s => s.id == id );
    const student = students[studentIndex];
    if(studentIndex == -1){
        res.status(404).json({message:"Stundent is not found."})
    }
    res.status(200).json(student);
})

app.put('/students/:id', (req, res) => {
    const student = req.body;
    const id = req.params.id;
    console.log(student);
    console.log(id);
    studentIndex = students.findIndex(s => s.id == id);
    students[studentIndex] = student;
    console.log(students)
    res.status(200).json(student); // Respond with HTTP status 200 (updated) and the updated item.
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
