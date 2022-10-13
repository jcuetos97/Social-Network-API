// Dependencies
const mongoose = require('mongoose');
// Moment import to fomart timestamps
const moment = require('moment');
//Reaction Schema
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
//Thought Schema
const thoughtSchema = new mongoose.Schema(
    {
        thoughtText: {
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
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
)
//Mongoose virtual for reactionCount
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})
//Thought model creation with thoughtSchema
const Thought = mongoose.model('Thought', thoughtSchema); 
//Thought model export
module.exports = Thought;