
require('dotenv').config();
const http = require('http');
const fs = require('fs');
const portNo=process.env.PORT
const host=process.env.HOST

const server = http.createServer((req,res)=>{
if(req.url=="/")    
{
    console.log("request made by",req.url);
    res.writeHead(200,{'Content-type':'text/html'});
    // res.write("<html> <body> <h1>This my home page output</h1>   </body>   </html>");
    // res.end();
    var myReadStream = fs.createReadStream(__dirname+'/index.html','utf-8')
    myReadStream.pipe(res)
}
if(req.url=="/about")    
{
    console.log("request made by",req.url);
    res.writeHead(200,{'Content-type':'text/html'});
    // res.write("<html> <body> <h1>This my about page output</h1>   </body>   </html>");
    // res.end();
    var myReadStream = fs.createReadStream(__dirname+'/about.html','utf-8')
    myReadStream.pipe(res)
}
if(req.url=="/service")    
{
    console.log("request made by",req.url);
    res.writeHead(200,{'Content-type':'text/html'});
    // res.write("<html> <body> <h1>This my service page output</h1>   </body>   </html>");
    // res.end();
    var myReadStream = fs.createReadStream(__dirname+'/service.html','utf-8')
    myReadStream.pipe(res)
}
if(req.url=="/user")    
{
    console.log("request made by",req.url);
    res.writeHead(200,{'Content-type':'text/html'});
    const user={
        userName:"Admin",
        pass: "admin@123"
    }
    res.write(JSON.stringify(user));
    res.end();
}
if(req.url=="/mobile")    
{
    console.log("request made by",req.url);
    res.writeHead(200,{'Content-type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname+'/mobile.html','utf-8')
    myReadStream.pipe(res)
}
if(req.url=="/printer")    
{
    console.log("request made by",req.url);
    res.writeHead(200,{'Content-type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname+'/printer.html','utf-8')
    myReadStream.pipe(res)
}
if(req.url=="/laptop")    
{
    console.log("request made by",req.url);
    res.writeHead(200,{'Content-type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname+'/laptop.html','utf-8')
    myReadStream.pipe(res)
}
if(req.url=="/headphones")    
{
    console.log("request made by",req.url);
    res.writeHead(200,{'Content-type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname+'/headphones.html','utf-8')
    myReadStream.pipe(res)
}
if(req.url=="/tv")    
{
    console.log("request made by",req.url);
    res.writeHead(200,{'Content-type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname+'/tv.html','utf-8')
    myReadStream.pipe(res)
}
})

server.listen(portNo,()=>{
    console.log(`my server get started on ${host}:${portNo}`);
})

