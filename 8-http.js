const http=require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('hai nikki')
    }
    if(req.url==='/about'){
        res.end("this is about page")
    }
    if(req.url==='/contact'){
        res.end('my contact page')
    }
    res.end(`
    <h1>Nikki</h1>
    <p>we can't find the page that u are looking</p>
    <a href="/">Back to home</a>
    `)
})
   


server.listen(5000)