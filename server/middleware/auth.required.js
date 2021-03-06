const jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    try {
        const bearerHeader = req.headers.authorization;
        if (typeof bearerHeader === 'undefined') {
            return res.sendStatus(403);
        }
        const token = bearerHeader.split(' ')[1]
        const payload = await jwt.verify(token, 'color')
        req.staffId = payload._id;
        next()
    }catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({
                status: 500,
                message: "Internal server error. Refresh your page and try again."
            })
    }

}