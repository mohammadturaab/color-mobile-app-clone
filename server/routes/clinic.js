const router = require('express').Router();
const { clinic } = require('../controllers')
const authRequired = require ('../middleware/auth.required')

router.get('/', authRequired, clinic.index);
router.get('/:id', authRequired, clinic.getClinic);
router.post('/', authRequired, clinic.createClinic);
router.get('/:id', authRequired, clinic.getAll);

module.exports = router;