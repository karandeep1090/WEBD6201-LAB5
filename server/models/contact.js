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