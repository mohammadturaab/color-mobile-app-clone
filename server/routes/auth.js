const router = require('express').Router();
const {isAuth, signup,login} = require('../controllers');

router.post("/signup", signup)
router.post("/login", login);
router.get('/private', isAuth);


module.exports = router;