const router = require('express').Router();
const {

} = require('../../controllers/userController');

// Route: /api/users
router.route('/').get().post();
// Route: /api/users/:userId
router.route('/:userId').get().post().delete();
// Route: /api/users/:userId/friends/friendId
router.route('/:userId/friends/:friendId').post().delete();

module.exports = router; 