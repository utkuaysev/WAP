const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).sendFile("./views/users.html", { root: "./public" });    
});

router.post('/', (req, res) => {
    const formData = req.body;
    res.send(`You submitted: ${JSON.stringify(formData)}`)}
);

module.exports = router;
