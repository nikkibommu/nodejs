const http =require('http')
const{readFileSync}=require('fs')

//get all files
const home=readFileSync("./About.html")

const server=http.createServer((req,res)=>{
    //console.log(req.method)
    //console.log(req.url)
    const url=req.url;
if(url==='/'){
   res.writeHead(200,{'content-type':'text.html'})
   res.write(home)
    res.end()
    }
if(url==='/About'){
        res.writeHead(200,{'content-type':'text.html'})
        res.write('<h1>About</h1>')
         res.end()
         }
if(url==='contact'){
            res.writeHead(200,{'content-type':'text.html'})
            res.write('<h1>contact</h1>')
             res.end()
             }
else{
    res.writeHead(404,{'content-type':'text/html'})
    res.write("<h2>nikki</h2>")
    res.end()
}

})
server.listen(5000)