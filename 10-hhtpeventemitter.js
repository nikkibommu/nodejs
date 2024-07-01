const http=require('http')
 const server=http.createServer()

 server.on('request',(req,res)=>{
    res.end("nikki")
 })
 server.listen(5000,()=>{
    console.log("running on 5000")

 }
)