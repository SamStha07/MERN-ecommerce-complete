const express = require('express');
const {
  signup,
  login,
  logout,
} = require('../../controllers/admin/authAdminController');
const { requireSignIn } = require('../../middlewares/auth');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', requireSignIn, logout);

module.exports = router;
