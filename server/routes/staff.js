const router = require('express').Router();
const {staff} = require('../controllers');
// const authRequired = require('../middleware/auth.required')

router.get("/", staff.index)
router.get("/:id", staff.show)

module.exports = router;