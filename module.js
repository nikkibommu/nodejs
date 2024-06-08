
const {add,sub}=require('./1-module');
const data=require('./2-module')
require('./3-module')
console.log(data)


console.log("math value is",add(3,4))
console.log("math value is",sub(3,4))
