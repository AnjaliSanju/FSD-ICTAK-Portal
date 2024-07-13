//Defining routes for admin module. Functions can be added to the Controller/adminController

const express=require('express')
const Router=express.Router();
const cors=require('cors')
const { postReference, postSubmission }=require('../Controllers/mentorController')

Router.use(express.json());
Router.use(cors());

Router.post('/reference',postReference)  // Adding new reference link
Router.post('/submission',postSubmission)  // Adding new reference link



module.exports=Router