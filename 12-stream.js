const{createReadStream}=require('fs')

const stream=createReadStream('./content/bigdata.txt',{highWaterMark:9000,
  
});

stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(err)=>{
    console.log(err)
})