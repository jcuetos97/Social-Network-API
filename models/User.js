// Dependencies
const { Schema, model } = require('mongoose');
//User Schema
const userSchema = new Schema(
    {
        username: {
            type: String, 
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true, 
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
            "Please fill a valid email address",
            ],
        }, 
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ], 
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
//Mongoose virtual for friendCount
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})
//User model creation with userSchema
const User = model('User', userSchema);
//User model export
module.exports = User; 