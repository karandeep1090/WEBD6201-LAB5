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

let express = require('express');
let router = express.Router();

// create a reference to the DB Schema
let contactModel = require('../models/contact');

module.exports.displayContactList = (req, res, next) =>{
    contactModel.find((err, contactList) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(contactList);
            res.render('contacts/index', {
                title: 'Contact List',
                contactList: contactList,
                displayName: req.user ? req.user.displayName : ""
            });
        }
    });
};

module.exports.displayAddPage = (req, res, next) => {
    res.render('contacts/addedit',{
        title: 'Add',
        contact: "",
        displayName: req.user ? req.user.displayName : ""
    })
};

module.exports.processAddPage = (req, res, next) => {
    let newContact = contactModel({
        "contactName": req.body.contactName,
        "contactEmail": req.body.contactEmail,
        "contactNumber": req.body.contactNumber
    });

    contactModel.create(newContact, (err, contactModel) =>
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
};

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    contactModel.findById(id, (err, contactObject) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the edit view
            res.render('contacts/addedit',{
                title: 'Edit',
                contact: contactObject,
                displayName: req.user ? req.user.displayName : ""
            });
        }
    });

    
};

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = contactModel({
        "_id":id,
        "contactName": req.body.contactName,
        "contactEmail": req.body.contactEmail,
        "contactNumber": req.body.contactNumber
    });

    contactModel.update({_id: id}, updatedContact, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
};


module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    contactModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            // refresh the contact list
            res.redirect('/contact-list');
        };
    });
}