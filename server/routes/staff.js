const router = require('express').Router();
const {staff} = require('../controllers');
const authRequired = require('../middleware/auth.required')

router.get("/", staff.index)
router.get("/:id",authRequired, staff.show)

module.exports = router;