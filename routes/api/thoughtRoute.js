const router = require('express').Router();
const {
    getThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought, 
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// Route: /api/thoughts
router.route('/').get(getThoughts).post(createThought);
// Route: /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(deleteThought);
// Route: /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);
// Route: /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;