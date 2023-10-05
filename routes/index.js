const router = require('express').Router();
const apiRoutes = require('./api');

// with this any request that starts with "/api" will be sent to the router in "api/index.js"
router.use('/api', apiRoutes);

// then we will andle any routes not found with a 404
router.use((req, res) => {
    return res.status(404).send('404 Not Found');
});

module.exports = router;