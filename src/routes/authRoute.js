const express = require('express');
const { signup, login } = require('../controllers/authController.js');
const { requireSignIn } = require('../middlewares/auth');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

// To access this route first you need to be logged in
// router.post('/profile', requireSignIn, (req, res) => {
//   res.status(200).json({ user: 'profile' });
// });

module.exports = router;
