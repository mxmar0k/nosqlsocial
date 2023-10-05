const { Schema, model } = require('mongoose');

// we define the schema for users
const userSchema = new Schema(
  {
    // we have the username for the user (unique for each user)
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    // we have the email for the user (unique for each user)
    email: {
      type: String,
      required: true,
      unique: true,
      // validation to ensure email format is correct
      match: [/.+\@.+\..+/, 'Must match an email address!']
    },
    // the array of thoughts (IDs) associated with the user
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    // and the array of friends (IDs) associated with the user
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

// virtual property to get the total count of friends on retrieval
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// create the user model using the User schema
const User = model('User', userSchema);

module.exports = User;
