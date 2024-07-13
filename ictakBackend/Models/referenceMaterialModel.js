
//Defining referencematerial table which collect all the links mentors sharing for the batches

const mongoose=require('mongoose')
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const referenceSchema=new mongoose.Schema({
    link:String,
    batch_id:ObjectId
})

const referenceData=mongoose.model('reference',referenceSchema);

module.exports=referenceData;