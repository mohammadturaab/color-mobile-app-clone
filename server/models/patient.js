const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const patientSchema = new Schema ({
    firstName: String,
    lastName: String,
    email: String,
    dob: Number,
    Clinic: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Clinic"
    }],
    barcode: [Number],
},
{
    timestamps: true,
})

module.exports = mongoose.model('Patient', patientSchema);