const express=require('express')
const app=express()
let{people,products}=require('./data')

//
app.use(express.static('./public'))

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})



app.listen(5000,()=>{
    console.log("running on 5000")
})