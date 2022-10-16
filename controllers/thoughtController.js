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
        Thought.findOne({ _id: req.params.userId })
            .then((thought) => 
            !thought
                ? res.status(200).json({message: 'No thought with this ID!'})
                : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Create new thought
    createThought(req, res) {
        Thought.create(req.body)
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => res.status(500).json(err));
    },
    // Update thought 
    updateThought(req, res) {

    },
    // Remove thought
    deleteThought(req, res) {

    }
}