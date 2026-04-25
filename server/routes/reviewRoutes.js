// ============================================================
// routes/reviewRoutes.js
// ============================================================
const express = require('express');
const router = express.Router();
const { addReview, getReviews, deleteReview } = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, addReview);
router.get('/:serviceId', getReviews);
router.delete('/:id', protect, deleteReview);

module.exports = router;
