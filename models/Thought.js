const mongoose = require('mongoose');
const moment = require('moment');


const reactionSchema = mongoose.Schema (
    {
        reactionId: {
            type: ObjectID,
            default: () => new mongoose.Schema.Types.ObjectId(), 
        }, 
        reactionBody: {
            type: String, required: true, 
            maxlength: 280,
        }, 
        username: {
            type: String, 
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAt => moment(createdAt).format("MMM DD, YYYY [at] hh:mm a")
        }
    }
)

const thoughtSchema = new mongoose.Schema(
    {
        text: {
            type: String, 
            required: true,
            minlength: 1,
            maxlength: 280,
        }, 
        createdAt: {
            type: Date, 
            default: Date.now, 
            get: createdAt => moment(createdAt).format("MMM DD, YYYY [at] hh:mm a"),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {

    }
)




const Thought = mongoose.model('Thought', thoughtSchema); 


module.exports = Thought;