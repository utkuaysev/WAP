const express = require('express');
const app = express();
const path = require('path');

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));



const usersR = require('./public/routers/users');
const productsR = require('./public/routers/products');
app.use('/users', usersR);
app.use('/products', productsR);


app.use((req,res,next)=>{
    res.status(404).sendFile("./views/404.html", { root: "./public" });    
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something went wrong!');
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
