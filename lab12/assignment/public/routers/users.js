const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).sendFile("./views/users.html", { root: "./public" });    
});

router.post('/', (req, res) => {
    res.send("Routing "+ req.method + " "+req.body);
});

module.exports = router;
