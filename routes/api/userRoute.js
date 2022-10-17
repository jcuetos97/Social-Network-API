const router = require('express').Router();
const {
    getUser,
    getOneUser,
    createUser,
    updateUser, 
    deleteUser, 
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// Route: /api/users
router.route('/').get(getUser).post(createUser);
// Route: /api/users/:userId
router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);
// Route: /api/users/:userId/friends
router.route('/:userId/friends').post(addFriend);
// Route: /api/users/:userId/friends/friendId
router.route('/:userId/friends/friendId').delete(deleteFriend);

module.exports = router; 