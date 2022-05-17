const mongoose = require('mongoose')
// const Schema = mongoose.Schema;

const clinicSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    staff: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Staff"
    }],
    patient: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    }],
})

module.exports = mongoose.model('Clinic', clinicSchema);