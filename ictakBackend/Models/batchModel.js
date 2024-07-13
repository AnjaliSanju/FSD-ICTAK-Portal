//Defining Batch table


const mongoose=require('mongoose')
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const batchSchema=new mongoose.Schema({
    title:String,
    mentor_alloted:ObjectId
})

const batchData=mongoose.model('batch',batchSchema);

module.exports=batchData;