const authorize=(req,res,next)=>{
    const{user}=req.query;
    if(user==='nikki'){
        req.user={name:Nikki,id:4}
        next()
    }
    else{
    req.status(404).send('unauthorized')
    next()
    }
}
module.exports=authorize