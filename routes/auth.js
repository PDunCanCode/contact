const express = require('express');
const router = express.Router();

//@post GET api/auth
//@desc  Get Logged in user
// @access Private
router.get('/', (req, res) => {
    res.send('Get Logged In User');
});
//@post POST api/auth
//@desc  Auth user & Get token
// @access Public
router.get('/', (req, res) => {
    res.send('Log In User');
});

module.export =router;
