const router = require('express').Router();
const { clinic } = require('../controllers')
const authRequired = require ('../middleware/auth.required')

router.get('/', clinic.index);
router.get('/', clinic.index);