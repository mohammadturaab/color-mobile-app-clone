const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const staffSchema = new Schema ({
    password: { 
        type: 'string',
        select: false,
    },
    firstName: String,
    lastName: String,
    email: String,
    admin: {
        type: 'boolean',
    },
    Clinic: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Clinic"
    }]
})

module.exports = mongoose.model('Staff', staffSchema);