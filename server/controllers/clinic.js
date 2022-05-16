const db = require('../models');

const index = (req, res) => {
    db.Clinic.find({Admin: true}),
    (err, foundClinic) => {
        if (err){
            return res
                .status(400)
                .json({
                    message: 'Error 400',
                    err: err,
                })
        }
        return res
            .status(200)
            .json({
                message: 'Found Clinic',
                data: foundClinic
            })
    }
}

const getClinic = (req, res) => {
    db.Clinic.find({Patient: req.patientId})
    .populate("Clinic")
    .exec((err, foundClinic) => {
        if (err){
            return res
                .status(400)
                .json({
                    message: "Failed to find Clinic",
                    err: err,
                })
        }
        return res
            .status(200)
            .json({
                message: "Success",
                data: foundClinic
            })
    })
}

const createClinic = async (req, res) => {
    console.log("creating clinic");
    let incomingReq = {
        name: req.body.name,
        Staff: req.staffId,
    }
    await db.Clinic.create(incomingReq, (err, createdClinic) => {
        if (err){
            return res
                .status(400)
                .json({
                    message: "Failed create clinic",
                    err: err,
                })
        };
        db.staff.findById(createdClinic.Staff)
            .exec(function (err, foundStaff){
                if (err){
                    return res
                        .status(400)
                        .json({
                            message: "Failed to find staff",
                            err: err
                        })
                }
                createdClinic.staff.push(foundStaff);
                createdClinic.save();
                console.log("saved " + foundStaff)
                return res
                    .status(400)
                    .json({
                        message: "Success",
                        data: createdClinic,
                        staff: foundStaff,
                    })
            })
    })
}

const getAll = (req, res) => {
    db.Clinic.findById(req.params.id, (err, foundClinic) => {
        if(err){
            return res
                .status(400)
                .json({
                    error: err
                })
        } else{
            return res
                .status(200)
                .json({ 
                    message: "Found Clinic",
                    data: foundClinic,
                })
        }
    })
}


module.exports = {
    index,
    getClinic,
    createClinic,
    getAll
}