const router = require('express').Router();
const {patient} = require('../controllers')

router.get('/:id', patient.getPatient)
router.get('/', patient.getAll)
router.post('/', patient.createPatient)
router.put('/:id', patient.updatePatient)
router.delete('/:id', patient.deletePatient)


module.exports = router;