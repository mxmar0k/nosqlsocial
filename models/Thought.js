const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// we define the schema for thoughts
const thoughtSchema = new Schema(
  {
    // this is the text content of the thought
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    // the timestamp for the creation time of the thought
    createdAt: {
      type: Date,
      default: Date.now
    },
    // the user (username) who created the thought
    username: {
      type: String,
      required: true
    },
    // and the array of reactions associated with the thought
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

// virtual property to get the total count of reactions on retrieval
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// then we create the thought model using the thought schema
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
