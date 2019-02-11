const http = require('http');
const fs = require('fs');

fs.readFile('index.html', (err, data) => {  
if(err) throw err


const server=http.createServer((req,res)=>{
	res.statusCode=200;
 res.setHeader('Content-type','text/html');
 res.write(fs);
 res.end();
});
server.listen(3030,()=>{
console.log('server running at :3030');
});

});

 



