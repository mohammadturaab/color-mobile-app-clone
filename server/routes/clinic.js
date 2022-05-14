const router = require('express').Router();
const { clinic } = require('../controllers')
const authRequired = require ('../middleware/auth.required')

router.get('/', authRequired, clinic.index);
router.get('/:id', clinic.getClinic);
router.post('/', clinic.createClinic);
router.get('/:id', clinic.getAll);

module.exports = router;