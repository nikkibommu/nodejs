const express=require('express')
const app=express()
//const {products}=require('./data)
app.get('/',(req,res)=>{
    res.json([{name:'nikki'},{age:23}])
   // res.send('<h1>home page</h1><a herf="/api/products">products</a>')
    //res.jon(products)
})
app.get('/api/products/search',(req,res)=>{
   console.log( req.params)
   res.send('hai nikki')

})




app.listen(5000,(req,res)=>{
    console.log("runing")
})