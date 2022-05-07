const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose
        .connect(process.env.MONGO_URL)
        .then(() => {
            console.log(`mongoDB connected at ${db.host}: ${db.port}`)
        })
        .catch((err) => {
            console.log(`mongoDB error: ${err}`)
        })

module.exports = {
    patient: require('./patient'),
    staff: require('./staff')
}