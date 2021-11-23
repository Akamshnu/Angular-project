const fs = require('fs')

var myReadableStream = fs.createReadStream(__dirname+'/readMe.txt','utf8');
var myWritableStream = fs.createWriteStream(__dirname+'/writeStream.txt');
myReadableStream.on('data',(chunks)=>{
    console.log(chunks);
    myWritableStream.write(chunks);
})
