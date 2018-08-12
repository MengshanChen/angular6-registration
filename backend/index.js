//node framework: express
//--save: this express only be used in this particular project 
var express = require('express'); 

//call express to create an app 
var app = express();

//heroku: produce the web = process.env.port, if it not exist, use 3000
app.set('port', process.env.port || 3000)

//default route
app.get('/', (req, res) => {
    res.send("hello");
})

//listen to our server
//简易版：app.listen(app.get('port'));
//add a callback funtion: 
app.listen(app.get('port'),function(err,response) {
    console.log("Server is running on port", app.get('port'));
});



/*process: 
1. create backend folder
2. npm init
3. create index.js 
4. install express
5. connect to express, create a port and listen to the server
*/