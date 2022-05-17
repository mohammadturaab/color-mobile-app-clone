const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const patientSchema = new Schema ({
    patientFirstName: {
        type: String,
        required: true
    },
    patientLastName: {
        type: String,
        required: true
    },
    patientDOB: {
        type: Number,
        required: true
    },
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