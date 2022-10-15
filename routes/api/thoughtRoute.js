const router = require('express').Router();
const {

} = require('../../controllers/thoughtController');

// Route: /api/thoughts
router.route('/').get().post();
// Route: /api/thought/:thoughtId
router.route('/:thoughtId').get().post().delete();
// Route: /api/thought/:thoughtId/reactions
router.route('/:thoughtId/reactions').post().delete();

module.exports = router;