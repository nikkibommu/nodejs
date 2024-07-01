const http=require('http')
var fs=require('fs')

const server= http.createServer((req,res)=>{
    //const text=fs.readFileSync('./content/bigdata.txt','utf8')
    //res.end(text)
    const fileStream=fs.createReadStream('./content/bigdata.txt','utf-8')
    fileStream.on('open',()=>{
fileStream.pipe()
    })
    fileStream.on('error',(err)=>{
        console.log(err)
    })
})
server.listen(5000)