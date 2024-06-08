const path=require('path');


console.log(path.sep);
const filepath=path.join('./impact','./html','./not.js')
console.log(filepath);

const base=path.basename(filepath)
console.log(base)

const absolute=path.resolve(__dirname,'impact','html','not.js')
console.log(absolute)