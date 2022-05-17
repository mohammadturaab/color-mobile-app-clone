const db = require('../models');

const index = (req, res) => {
    db.clinic.find().exec( 
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
    })
}

const show = (req, res) => {
    db.clinic.findById(req.params.id, (err, foundClinic) => {
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
                message: "Found Clinic",
                data: foundClinic
            })
    })
}

const getClinic = (req, res) => {
    db.clinic.find(req.params.id)
    .exec((err, foundClinic) => {
        console.log(foundClinic)
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
    let incomingReq = {
        clinicName: req.body.clinicName,
    }
    await db.clinic.create(incomingReq, (err, createdClinic) => {
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

// const show = (req, res) => {
//     console.log("hitting backend 3");
//     console.log(req.clinic.id);
//     db.clinic.findById(req.params.data, (err, foundClinic) => {
//             console.log(err)
//         if(err) {
//             return res
//                 .status(400)
//                 .json({
//                     error: err
//                 })
//         } else{
//             return res
//                 .status(200)
//                 .json({ 
//                     message: "Found Clinic",
//                     data: foundClinic,
//                 })
//         }
//     })
// }


module.exports = {
    index,
    getClinic,
    createClinic,
    show
 }