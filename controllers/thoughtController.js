const {User, Thought} = require('../models');

module.exports = {
    // Get all thoughts
    getThoughts(req,res) {
        Thought.find({})
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    // Get one single thought
    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) => 
            !thought
                ? res.status(404).json( { message: 'No thought with this ID!' } )
                : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Create new thought
    createThought(req, res) {
        Thought.create(req.body)
        .then((dbThoughtData) => {
            return User.findOneAndUpdate(
                {_id: req.body.userId },
                { $push: { thoughts: dbThoughtData._id } },
                { new: true },
            );
        })
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => res.status(500).json(err));
    },
    // Update thought 
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((thought) => 
        !thought
            ? res.status(404).json( { message: 'No thought with this ID!' } ) 
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err)); 
    },
    // Remove thought
    deleteThought(req, res) {
        Thought.findByIdAndDelete( { _id: req.params.thoughtId } )
        .then((thought) =>
        !thought
          ? res.status(404).json( { message: 'No thought with this ID!' } )
          : User.findOneAndUpdate(
            { thoughts: req.params.thoughtId },
            { $pull: { thoughts: req.params.thoughtId } },
            { new: true }
            )
        )
        .then((user) =>
        !user
          ? res.status(404).json( { message: 'Thought deleted, but no user found'} ) 
          : res.json( { message: 'Thought successfully deleted' } )
        )
        .catch((err) => res.status(500).json(err)) ;
    },
    // Create a reaction stored in a single thought's reactions array field
    createReaction(req, res) {
        Thought.findOneAndUpdate( 
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { new: true }
        )
        .then((thought) =>
        !thought
          ? res.status(404).json( { message: 'No thought with this ID!' } )
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err)); 
    },
    // Delete to pull and remove a reaction by the reaction's reactionId value
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
        .then((thought) =>
        !thought
          ? res.status(404).json( { message: 'No thought with this ID!' } )
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err)); 
    },
};