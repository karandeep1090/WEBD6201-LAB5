/*
File name : user.js
Description : This file is made as a part of Lab 5
Student's name : Karandeep
StudentID : 100734535
Student's name : Ritu Patel
StudentID : 100730021
Student's name : Harmanpreet Kaur
StudentID : 100734511
Date : 2020-04-16
*/

// require modules for our user Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let userSchema = mongoose.Schema({
    username: 
    {
        type: String,
        default: "",
        trim: true,
        required: "username is required"
    },
    /* taken out because password will be encrypted by passport-local-mongoose
    password: 
    {
        type: String,
        default: "",
        trim: true,
        required: "password is required"
    },
    */
   email: 
    {
        type: String,
        default: "",
        trim: true,
        required: "email is required"
    },
    displayName: 
    {
        type: String,
        default: "",
        trim: true,
        required: "Display Name is required"
    },
    created: 
    {
        type: Date,
        default: Date.now()
    },
    updated: 
    {
        type: Date,
        default: Date.now()
    }
},
{
    collection: "users"  
});

// configure options of the UserSchema

let options = 
({
    missingPasswordError: "Wrong / Missing Password"
});


userSchema.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', userSchema);