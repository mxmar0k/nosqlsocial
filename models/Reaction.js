const { Schema, Types } = require('mongoose');

// we define the schema for reactions
const reactionSchema = new Schema(
  {
    // we gve an unique ID for the reaction
    reactionId: {
      type: Types.ObjectId,
      default: new Types.ObjectId()
    },
    // this is the body text of the reaction
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    // this is the user (username) who created the reaction
    username: {
      type: String,
      required: true
    },
    // this is the timestamp for the creation time of the reaction
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
);

// we export the reaction schema for use in the Thought model
module.exports = reactionSchema;
