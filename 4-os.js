const os =require('os');

//info of current user
const user=os.userInfo()
console.log(user)
//method return the system uptime in seconds
console.log(`system uptime is ${os.uptime()} seconds`)

const currentos={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),

}
console.log(currentos)