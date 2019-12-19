const express = require('express');
const router = express.Router();

//@post POST api/users
//@desc register a user
// @access Public
router.post('/', (req, res) => {
    res.send('register a user');
});

module.export =router;
