var restful = require('node-restful');
var mongoose = restful.mongoose;
var CONSTANT = require('../utilities/Constant').CONSTANT;

var roleSchema = mongoose.Schema({
	name: {
        type: String,
        trim: true,
        default: ''
    },
    fakeId: {
        type: Number,        
        default: ''
    },
    description: {
        type: String,
        trim: true,
        default: ''
    }
});

module.exports = restful.model(CONSTANT.TABLES.CATEGORIES, roleSchema);