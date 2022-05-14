const db = require('../models')


const getPatient = (req, res) => {
    db.patient.findById({patient: req.patientId})
    .populate("Patient")
    .exec((err, foundPatient)=> {
        if (err){
            return res
                .status(400)
                .json({
                    message: "patient not found",
                    error: err
                })
        } return res
            .status(200)
            .json({
                message: "patient found",
                data: foundPatient
            })
    })
}

const createPatient = (req, res) => {
    let incomingReq = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        barcode: req.body.barcode
    }
    db.patient.create(incomingReq, (err, savedPatient) =>{
        if (err) {
            return res
                    .status(400)
                    .json({
                        message: "Failed to create patient",
                        error: err,
                    })
        } return res
                .status(201)
                .json({
                    message: "patient created",
                    data: savedPatient
                })

    })
}

const updatePatient = (req, res) => {
    db.Post.findByIdAndUpdate(
            req.params.id, 
            req.body,
            {new: true}, (err, updatedPatient) => {
                if (err){
                    return res.status(400).json({
                        message: "couldn't update",
                        error: err,
                    })
                }
                return res.status(202).json({
                    message: "Patient Info Updated",
                    data: updatedPatient
                })
            })
}

const deletePatient = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPatient) => {
        if (err){
            return res.status(400).json({
                message: "couldn't delete",
                error: err,
            })
        }
        return res.status(200).json({
            message: "Patient Deleted",
            data: deletedPatient
        })
    })
}


module.exports = {
    getPatient,
    updatePatient,
    createPatient,
    deletePatient
}