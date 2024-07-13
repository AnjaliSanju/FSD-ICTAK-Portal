
//Defining project table

const mongoose=require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const projectSchema=new mongoose.Schema({
    title:String,
    batch_id:ObjectId,
    mentor_id:ObjectId,
})

const projectData=mongoose.model('project',projectSchema);

module.exports=projectData;