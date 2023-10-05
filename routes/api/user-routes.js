const router = require('express').Router();

// we import methods 
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
  //  we can add any other controller methods 
} = require('../../controllers/user-controller');

// we have to set up root route to get all users and create a new one
router.route('/')
  .get(getAllUsers)      // retrieve all users from the database
  .post(createUser);    // create a new user and add them to the database

// then we set up dynamic routes with IDs for specific operations on individual users
router.route('/:id')
  .get(getUserById)     // we retrieve a specific user by their id from the database
  .put(updateUser)      // or update a specific user details by their id
  .delete(deleteUser);  // or delete a specific user by their id

// add a friend and remove a friend
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

// we can add more routes as we see fit

module.exports = router;
