/*
File name : contact.js
Description : This file is made as a part of Lab 5
Student's name : Karandeep
StudentID : 100734535
Student's name : Ritu Patel
StudentID : 100730021
Student's name : Harmanpreet Kaur
StudentID : 100734511
Date : 2020-04-16
*/

let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    contactName: String,
    contactEmail: String,
    contactNumber: String
},
{
    collection: 'contacts'
});

module.exports = mongoose.model('contact', contactSchema);