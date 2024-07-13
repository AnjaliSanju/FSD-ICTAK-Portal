

const express= require('express');
require('dotenv').config();
var cors = require('cors');
const adminRouter=require('./Routers/adminRouter')
const mentorRouter=require('./Routers/mentorRouter')


require('./db/mongodb')

const app=express();
const port=process.env.port||3000;

app.use(express.json());
app.use(cors());
app.use('/admin',adminRouter);
app.use('/mentor',mentorRouter);



app.listen(port,()=>{
    console.log('ICTAK Server started listening to '+port);
})

