const router = require('express').Router();
const { clinic } = require('../controllers')
const authRequired = require ('../middleware/auth.required')

router.get('/:id', clinic.index);
router.get('/', clinic.getClinic);
router.post('/', authRequired, clinic.createClinic);
router.get('/:id', clinic.showOne);

module.exports = router;