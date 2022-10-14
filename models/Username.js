const { default: mongoose } = require("mongoose");

const { Schema, model, Types } = ('mongoose');

const usernameSchema = new Schema(
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
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address",]
        }, 
        thoughts:[], 
        friends: []
    }
);

usernameSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const Username = model('username', usernameSchema);

module.exports = Username; 