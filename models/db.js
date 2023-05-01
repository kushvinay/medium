const mongoose = require("mongoose")
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1:27017/medium")
.then(()=> console.log("db is connected"))
.catch(()=> console.log(err));