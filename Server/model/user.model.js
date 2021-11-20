var mongoose = require('mongoose');
// Setup schema
var user = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    intro: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        default: ""
    },
    experience: {
        type: String,
        default: false
    },
    achievements: {
        type: String,
        default: ''
    },

});

module.exports = mongoose.model('user', user);