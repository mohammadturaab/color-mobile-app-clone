const router = require('express').Router();
const {auth} = require('./auth');
const authRequire = require('../middleware/auth.required');

router.use('/staff',authRequire, require('./staff'));
router.use('/auth', require('./auth'));