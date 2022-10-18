const { User, Thought } = require('../models');

module.exports = {
    // Get all users 
    getUser(req, res) {
       User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    // Get one single user
    getOneUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .populate('friends')
            .populate('thoughts')
            .then((user) =>
                !user
                ? res.status(404).json( { message: 'No user with this ID!' } )
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Create user
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    // Update user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) =>
        !user
          ? res.status(404).json( { message: 'No user with this ID!' } )
          : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Delete user and associated thoughts
    deleteUser(req, res) {
        User.findByIdAndDelete({ _id: req.params.userId })
        .then((user) =>
        !user
          ? res.status(404).json( { message: 'No user with this ID!' } )
          : Thought.deleteMany( { _id: { $in: user.thoughts } } )
        )
        .then(() => res.json( { message: "User and associated thoughts deleted!" } ))
        .catch((err) => res.status(500).json(err));
    }, 
    // Add new friend to user's friend list
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
        .then((user) =>
        !user
          ? res.status(404).json( { message: 'No user with this ID!' } )
          : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Remove friend from a user's friend list
    deleteFriend(req, res){
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
        .then((user) =>
        !user
          ? res.status(404).json( { message: 'No user with this ID!' } )
          : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
};