//Connecting to the ICTAK database,

const mongoose=require('mongoose');

 mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('ICTAK Database connected');
})
.catch((err)=>{
    console.error('Database connection failed:'+err);
})