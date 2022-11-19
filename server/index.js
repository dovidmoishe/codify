//import dependencies
import express from "express"
import cors from "cors"
import connectDb from "./config/db.js";
import User from "./routes/User.js"
import Users from "./models/user.model.js";
const app=express()

//middleware
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

//connect db
connectDb();

//endpoint
app.get("/", (req, res) => {
    res.json({ msg: "Success✅" });
  });
app.post("/log",(req,res)=>{
    const dbdata=req.body;
    Users.create(dbdata,(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(data)
        }
    })

})
//Routes
app.use(User);
//server listening to port
const port=process.env.PORT||8000;
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})