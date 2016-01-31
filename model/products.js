var restful = require('node-restful');
var mongoose = restful.mongoose;
var CONSTANT = require('../utilities/Constant').CONSTANT;

var roleSchema = mongoose.Schema({
	categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: CONSTANT.TABLES.CATEGORIES,
        required: true
    },
	name: {
        type: String,
        trim: true,
        default: ''
    },
    description: {
        type: String,
        trim: true,
        default: ''
    }
});

module.exports = restful.model(CONSTANT.TABLES.PRODUCTS, roleSchema);