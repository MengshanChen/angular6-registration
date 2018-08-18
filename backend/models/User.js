var mongoose = require('mongoose');

//add schema
var userSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
})


//export this schema
var User = module.exports = mongoose.model('User', userSchema);
