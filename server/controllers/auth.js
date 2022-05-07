const bcrypt = require('bcrypt');
const jwt = require('jwt');
const db = require('../models');

const signup = async(req, res, next) => {
    try {
        const foundStaff = await db.Staff.findOne({
            email: req.body.email
        })

        if (foundStaff) {
            return res
                .status
                .json({
                    message: "Email exists."
                })
        } else {
            const salt = await bcrypt.genSalt(9)
            const hash = await bcrypt.hash(req.body.password, salt)

            const newStaff = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash
            }

            const createdStaff = db.Staff.create(newStaff)
                .then((err, createdUser) => {

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
    try{
        const foundStaff = await db.Staff.findOne({
            email: req.user.email
        })
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
        if (isMatch) {
            const token = jwit.sign ({
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
        return res
            .status(500)
            .json({
                status: 500,
                errorMsg: err,
                message: "Internal server error. Refresh your page and try again."
            })

    }
}

const isAuth = (req, res, next) => {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
        return res.status(401).json({ message: 'not authenticated' });
    };
    const token = authHeader.split(' ')[1];
    let decodedToken; 
    try {
        decodedToken = jwt.verify(token, 'secret');
    } catch (err) {
        return res.status(500).json({ message: err.message || 'could not decode the token' });
    };
    if (!decodedToken) {
        res.status(401).json({ message: 'unauthorized' });
    } else {
        res.status(200).json({ message: 'here is your resource' });
    };
};

module.exports = {
    register,
    login,
    isAuth
}