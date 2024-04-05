const express = require('express');
const router = express.Router();
const Email= require('../controller/emailController');

// POST route to handle form submission
router.get('/', (req, res) => {
    res.send('Welcome to the Email API');
});

router.post('/send-email', Email.sendContactEmail);

module.exports = router;
