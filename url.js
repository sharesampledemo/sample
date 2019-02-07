const express=require('express');
const app=express();
const bodyparser= require('body-parser');
const fs = require('fs');
const data={};
var student;
app.use(bodyparser.json());

app.listen(4000,function(){
  console.log('connected');
});

fs.readFile('data.json', (err, data) => {  
    if (err) throw err;
    student = JSON.parse(data);
		let user4={
					"name" : "Narendra",
					"password" : "password3",
					"profession" : "software dev",
					"id": 4
		}
	
	student.user4=user4;
	var p='screen';
	 
});


 
 





app.get('/login',function(req,res){
	 console.log("hii");
	 res.send(student);
})


app.post('/post',function(req,res){
var name=req.body.name;
var pass=req.body.pass;

data.name=name;
data.pass=pass;
console.log(data);
res.send(data);
})

