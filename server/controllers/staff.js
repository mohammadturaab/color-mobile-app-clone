const db = require('../models');

const index = (req, res) => {
    let incomingReq = {
        Staff: req.staffId,
    }
    db.staff.find(incomingReq, (err, foundStaff) => {
        if (err) {
            return res
                .status(400)
                .json({
                    message: "Error 400",
                    err: err,
                })
        }
        return res
            .status(200)
            .json({
                message: "Found Staff",
                data: foundStaff
            })
    })
}

const show = (req, res) => {
    db.staff.findById(req.staffId,
        (err, foundStaff) => {
            if (err){
                return res
                    .status(400)
                    .json({ 
                        message: "Failed to find the staff profile",
                        error: err,
                    })
            }   else {
                return res
                    .status(200)
                    .json({
                        message: "found staff profile",
                        data: foundStaff
                    })
            }
        })
}

module.exports = {
    index, 
    show
}