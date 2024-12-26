const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define Documentary schema and model
const documentarySchema = new Schema({
    earlyLife: {
        type: String
    }, 
    writeUp1: {
        type: String
    }, 
    earlyCareer: {
        type: String
    }, 
    writeUp2: {
        type: String
    }, 
    achievements: {
        type: String
    }, 
    writeUp3: {
        type: String
    }, 
    laterLife: {
        type: String
    }, 
    writeUp4: {
        type: String
    }, 
    impact: {
        type: String
    }, 
    writeUp5: {
        type: String
    },
});

module.exports = mongoose.model('Documentary', documentarySchema);
