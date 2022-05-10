const router = require('express').Router();
const {staff} = require('../controllers');
const authRequire = require('../middleware/auth.required')

router.get("/", staff.index)
router.get("/:id", authRequired, staff.show)

module.exports = router;