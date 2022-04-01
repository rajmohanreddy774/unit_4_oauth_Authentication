const mongoose=require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb+srv://Raj_mohan:8ZzpJirjMscgMjtX@cluster0.llssm.mongodb.net/auth?retryWrites=true&w=majority")
}

module.exports=connect;