const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');

const signup = async(req, res) => {
    console.log('hitting signup')
    try {
        const foundStaff = await db.staff.findOne({
            email: req.body.email
        })

        if (foundStaff) {
            return res
                .status
                .json({
                    message: "Email exists."
                })
        } else {
            console.log("inside else");
            const salt = await bcrypt.genSalt(9)
            const hash = await bcrypt.hash(req.body.password, salt)

            const newStaff = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash
            }
            console.log("new staff "+ newStaff);
            const createdStaff = db.staff.create(newStaff)
                .then((err, createdStaff) => {

                })
                    return res
                        .status(201)
                        .json({
                            status: 201,
                            message: "registered new staff",
                            createdStaff
                        })
        }
    } catch (err) {
        return res
            .status(500)
            .json({
                status: 500,
                errorMsg: err,
                message: "Internal Server Error."
            })
    }
}

const login = async (req, res) => {
    console.log('hitting login')
    try{
        const foundStaff = await db.staff.findOne({
            email: req.body.email
        })
        console.log('hitting 1')
        .select("+password")
        if (!foundStaff){
            return res
                .status(400)
                .json({
                    status: 404,
                    message: "Incorrect email or password"
                })
        }
        const isMatch =  await bcrypt.compare(
            req.body.password, 
            foundStaff.password
            )
            console.log(isMatch + " " + foundStaff)
        if (isMatch) {
            const token = jwt.sign ({
                _id: foundStaff._id
            },
                'color', {
                    expiresIn: "48h"
                }
            )
            return res
                .status(200)
                .json({
                    status: 200,
                    message: "Login successful",
                    token
                })
        } else {
            return res
                .status(400)
                .json({
                    status: 400,
                    message: "Email or password is incorrect",
                })
        }
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({
                status: 500,
                errorMsg: err,
                message: "Internal server error. Refresh your page and try again."
            })

    }
}

module.exports = {
    signup,
    login,
}