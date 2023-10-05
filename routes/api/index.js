const router = require('express').Router();

// we import the different routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// then we prefix all routes defined in the user-routes.js with "/users"
router.use('/users', userRoutes);

// and the same all routes defined in the thought-routes.js with "/thoughts"
router.use('/thoughts', thoughtRoutes);

module.exports = router;
