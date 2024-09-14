const express = require('express');
const router = express.Router();

// Define route for blog post
router.get('/', (req, res) => {
    res.render('post', {
        title: 'My Awesome Blog',
        body: 'This is the first post of my amazing blog.'
    });
});

module.exports = router;