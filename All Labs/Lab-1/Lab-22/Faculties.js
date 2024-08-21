const mongo = require("mongoose");
// const { Schema } = mongo
const userSchema = new mongo.Schema({
    name : String,
    email : String,
    age : Number,
});

module.exports = mongo.model('Faculty' , userSchema);

