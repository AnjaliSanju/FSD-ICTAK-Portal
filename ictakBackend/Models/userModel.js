//Defining Users table: consisting Admin,Mentors


const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone_number:Number,
    password:String,
    role:{ type: String, enum: ['Admin', 'Mentor','Student'], default: 'Student' }
})

const userData=mongoose.model('user',userSchema);

module.exports=userData;