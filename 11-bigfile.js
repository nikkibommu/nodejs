const{writeFileSync}=require('fs')
for(let i=0;i<9000;i++){
    writeFileSync('./content/bigdata',`hai nikki ${i}\n`,{flag:'a'})
}

