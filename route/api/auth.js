const express = require('express')
const router = express.Router();
const { register, login, logout } = require('../../controllers/auth');
const { authorization } = require('../../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', authorization, logout);

module.exports = router;