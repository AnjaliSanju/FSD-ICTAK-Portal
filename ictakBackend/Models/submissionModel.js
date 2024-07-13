
//Defining submission table, this table has external keys from projects,batchs and users tables

const mongoose=require('mongoose')
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

const submissionSchema=new mongoose.Schema({
    project_id:ObjectId,
    student_id:ObjectId,
    batch_id:ObjectId,
    mentor_id:ObjectId,
    marks:Number,
    comments:String,
    date_of_submission:
    {
        type:Date,
        default:new Date()
    },
    status:{ type: String, enum: ['completed', 'pending'], default: 'pending' }
    
    
})

const submissionData=mongoose.model('submission',submissionSchema);

module.exports=submissionData;