const router = require('express').Router();

// we import methods
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
  // we can add more methods
} = require('../../controllers/thought-controller');

// we set up shop for the thought creation and getting
router.route('/')
  .get(getAllThoughts)      // we retrieve all thoughts from the database
  .post(createThought);     // we create a new thought and add it to the database

// then we set up dynamic routes with IDs for ops and thoughts 
router.route('/:id')
  .get(getThoughtById)      // we retrieve a specific thought by its id from the database
  .put(updateThought)       // we update a specific thought's details by its id
  .delete(deleteThought);   // we delete a specific thought by its id

// add a reaction and remove a reaction
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

// we can add more routes if we want to

module.exports = router;
