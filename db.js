const mongoose = require('mongoose');

var mongoURL='mongodb+srv://Batman:Ayush1907@cluster0.gq3kj0c.mongodb.net/rooms'


mongoose.connect(mongoURL,{useUnifiedTopology:true, useNewUrlParser:true});


var connection = mongoose.connection

connection.on('error',()=>{
    console.log('connection error')
});


connection.on('connected',()=>{
    console.log('connection successful')
});

module.exports= mongoose

