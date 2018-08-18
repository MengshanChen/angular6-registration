//node framework: express
//--save: this express only be used in this particular project 
var express = require('express'); 

//create a connection to database = mongoose module 
//npm install --save mongoose
var mongoose = require('mongoose');

//use middleware = body-parser for getting the date in request or body object
var bodyparser = require('body-parser');

//connect to the model for the schema = User after creating register function
var User = require('./models/User');

//install cors to connect different localhost: frontend-4200, backend-3000
var cors = require("cors");

//call express to create an app 
var app = express();

//connect to the database named 'meanAuthAngular'
//get response to check correctly connected
var db = mongoose.connect("mongodb://localhost:27017/meanAuthAngular", function (err, response){
    if(err) console.log("Error in connection");
    console.log("Connection added");
});

//call cors
app.use(cors());

//heroku: produce the web = process.env.port, if it not exist, use 3000
app.set('port', process.env.port || 3000);

//after installing body parser = receive JSON
app.use(bodyparser.json());

//default route
app.get('/', (req, res) => {
    res.send("hello");
})

//create a register route
//once add collection(data), you can see it on the Robo 3T
//send a JSON data from a front end or a postman (serve as front end) as req
//create a data model for database containing the schema(模型=email+password) -> models folder 
app.post('/register', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    //new instance of user by using the schema = User created above
    var user = new User();
    user.email = email;
    user.password = password;

    //save this new instance into db
    //once succeed, you can see it in meanAuthAngular in Robo 3T 
    user.save((err, result) => {
        if(err){
            console.log("Error in adding user in database");
            res.send({success: "Failed to add user", status: 500});
        }
        res.send({success: "Successful added user", status: 200});
    })
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