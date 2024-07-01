const EventEmitter=require('events');
const custom=new EventEmitter()
custom.on('response',()=>{
console.log('data recived')
})
custom.on('response',(name,id)=>{
    console.log(`sasake uchina ${name},${id}`)
})
custom.emit('response','nikki',34)
