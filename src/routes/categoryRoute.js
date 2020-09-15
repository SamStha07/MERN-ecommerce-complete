const express = require('express');
const {
  createCategory,
  getAllCategories,
} = require('../controllers/categoryController');

const { adminMiddleware, requireSignIn } = require('../middlewares/auth');

const router = express.Router();

router.post('/create', requireSignIn, adminMiddleware, createCategory);
router.get('/', getAllCategories);

module.exports = router;
