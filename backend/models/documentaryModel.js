const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define Documentary schema and model
const documentarySchema = new Schema({
    name: {
        type: String
    }, 
    earlyLife: {
        type: String
    }, 
    earlyCareer: {
        type: String
    }, 
    achievements: {
        type: String
    }, 
    laterLife: {
        type: String
    }, 
    impact: {
        type: String
    }
});

module.exports = mongoose.model('Documentary', documentarySchema);
