const express = require('express');
const router = express.Router();
const location = require('../controller/locationController');

// POST route to handle form submission
router.get('/', (req, res) => {
    res.send('Welcome to the Email API');
});

router.post('/location', location.getCurrentLocation);

module.exports = router;
