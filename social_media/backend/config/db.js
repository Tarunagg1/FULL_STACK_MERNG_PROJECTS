const mongoose = require('mongoose');

mongoose
    .connect("mongodb://localhost/socialmedia")
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch(err => {
        console.error(err)
    })
