//Functions related to Mentor module
//---------------------------------

const mongoose=require('mongoose')
const referenceData=require('../Models/referenceMaterialModel')
const submissionData=require('../Models/submissionModel')

//Adding data to the Reference table
//------------------------------

const postReference=async(req,res)=>{
    try {
        const referenceItem={
            link:req.body.link,
            batch_id:req.body.batch_id
        }
        var reference=new referenceData(referenceItem);
        await reference.save();
        console.log(referenceItem);
        res.status(200).json(reference);

    
    } catch (error) {
        res.status(500).json(error);
        console.error(error)
    }
}

const postSubmission=async(req,res)=>{
    try {
        const submissionItem={
            project_id:req.body.project_id,
            student_id:req.body.student_id,
            batch_id:req.body.batch_id,
            mentor_id:req.body.mentor_id,
            marks:req.body.marks,
            comments:req.body.comments,
            date_of_submission:req.body.date_of_submission,
            status:req.body.status           
        }
        var submission=new submissionData(submissionItem);
        await submission.save();
        console.log(submissionItem);
        res.status(200).json(submission);

    
    } catch (error) {
        res.status(500).json(error);
        console.error(error)
    }
}
module.exports={postReference,postSubmission}
