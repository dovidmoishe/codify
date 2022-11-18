const express=require("express")
const app=express()
const port=process.env.PORT || 8000

//listen
app.listen(port,()=>{
    console.log(`App is listening on ${port}`)
})