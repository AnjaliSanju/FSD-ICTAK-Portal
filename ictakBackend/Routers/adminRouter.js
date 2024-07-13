//Defining routes for admin module. Functions can be added to the Controller/adminController

const express=require('express')
const Router=express.Router();
const cors=require('cors')
const {postUser, postProject, postBatch, getMentors}=require('../Controllers/adminController')

Router.use(express.json());
Router.use(cors());

Router.post('/user',postUser)  // Adding new user
Router.post('/project',postProject)  // Adding new project
Router.post('/batch',postBatch)  // Adding new batch
Router.get('/mentors',getMentors)  //Get the list of Mentors


module.exports=Router