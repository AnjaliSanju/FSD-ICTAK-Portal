
//Functions related to Admin module
//---------------------------------

const mongoose=require('mongoose')
const userData=require('../Models/userModel')
const projectData=require('../Models/projectModel')
const batchData=require('../Models/batchModel')


//Adding data to the Users table
//------------------------------

const postUser=async(req,res)=>{
    try {
        const userItem={
            name:req.body.name,
            email:req.body.email,
            phone_number:req.body.phone_number,
            password:req.body.password,
            role:req.body.role
        }
        var user=new userData(userItem);
        await user.save();
        res.status(200).json(user);

    
    } catch (error) {
        res.status(500).json(error);
    }
}

//Adding data to the Projects table
//------------------------------

const postProject=async(req,res)=>{
    try {
        const projectItem={
            title:req.body.title,
            batch_id:req.body.batch_id,
            mentor_id:req.body.mentor_id
        }
        var project=new projectData(projectItem);
        await project.save();
        res.status(200).json(project);

    
    } catch (error) {
        res.status(500).json(error);
    }
}

//Adding data to the Batches table
//------------------------------

const postBatch=async(req,res)=>{
    try {
        const batchItem={
            title:req.body.title,
            mentor_alloted:req.body.mentor_id
        }
        var batch=new batchData(batchItem);
        console.log(batch);
        await batch.save();
        res.status(200).json(batch);

    
    } catch (error) {
        res.status(500).json(error);
    }
}
// Retrieve the list of Mentors

const getMentors= async(req,res)=>{
    try{
        const mentors=await userData.find ({ "role" : "Mentor" })
        res.status(200).json(mentors)

    }
    catch(err){
        console.log(res.status(500).json(err));
    }
}

module.exports={postUser,postProject,postBatch,getMentors}