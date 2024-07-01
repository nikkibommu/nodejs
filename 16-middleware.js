const express=require('express');
const app= express()
const morgan=require('morgan')
const logger=require('./17-logger')
const authorize=require('./18-authorize')
//app.use(logger){to use for all gett urls}
//app.use('api',logger)
//app.use(express.static('./public))

app.use(morgan('tiny'))
app.use([logger,authorize])
//req=>middleware=>res
/*const logger=(req,res,next)=>{
    const method=req.method;
    const url=req.url;
    const time=new Date().getFullYear()
    console.log(method,url,time)
    next()
 //res.send('naruto uzamaki')
 */


app.get('/',logger,(req,res)=>{
    

    res.send("Home")
})
app.get('/about',logger,(req,res)=>{
    res.send("About")
})
app.listen(5000,()=>{
    console.log("serever is running on 5000")
})