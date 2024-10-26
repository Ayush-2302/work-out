require("dotenv").config();
const express = require("express");
const mongoose= require('mongoose')
const workoutRouter=require('./routes/workout')
const userRouter=require ('./routes/user')

// express app
const app = express();
// middelwear
app.use(express.json());

app.use((req,res,next)=>{
    // console.log(req.path,req.method);
    next()
})
// routes
app.use('/api/workout',workoutRouter)
app.use('/api/user',userRouter)
// connect to db
mongoose.connect(process.env.mongo_URI)
.then(()=>{

app.listen(2000, () => {
  console.log("connected to mogodb successfully and app listening at", process.env.PORT);
});
})
.catch(()=>{
  console.log(error);
})
