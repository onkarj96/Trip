var mongoose = require('mongoose'),
    imageschema = mongoose.Schema({
        'createdBy': String,
        'createdOn': Date,
        'name': {
            type: String,
            required: true
        },
        'tag': String
    });

module.exports = mongoose.model('TblImage', imageschema);