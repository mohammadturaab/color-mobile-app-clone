const db = require('../models')

const getPatient = (req, res) => {
    db.patient.findById(req.params.id)
    .exec((err, foundPatient) => {
        console.log(foundPatient)
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

const getAll = (req, res) => {
    db.patient.find(req.params.id)
    .exec((err, foundPatient) => {
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
        patientFirstName: req.body.patientFirstName,
        patientLastName: req.body.patientLastName,
        patientDOB: req.body.patientDOB,
    }
    db.patient.create(incomingReq, (err, createdPatient) =>{
        if (err) {
            return res
                    .status(400)
                    .json({
                        message: "Failed to create patient",
                        error: err,
                    })
        } else {
        db.clinic.findById(req.body.clinic, (err, foundClinic) => {
                console.log(req.body.clinic);
                console.log(foundClinic);
                if (err){
                    return res.status(400).json({
                        message: "Failed find Clinic",
                        error: err,
                    })
                } else {
                    foundClinic.patient.push(createdPatient);
                    foundClinic.save();
                }
            })
        }
    })
}

const updatePatient = (req, res) => {
    console.log("in update");
    db.patient.findByIdAndUpdate(
        req.params.id,
        req.body,
            {new: true}, (err, foundPatient) => {
                console.log(req.body);
                console.log(req.params.id);
                console.log(foundPatient);
                if (err){
                    return res.status(400).json({
                        message: "Couldn't update",
                        error: err,
                    })
                }
                return res.status(202).json({
                    message: "Patient Info Updated",
                    data: foundPatient,
                    id: req.body
                })
            })
}

const deletePatient = (req, res) => {
    db.patient.findByIdAndDelete(req.params.id, (err, deletedPatient) => {
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
    deletePatient,
    getAll
}