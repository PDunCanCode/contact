const express = require('express');
const router = express.Router();

//@route POST api/users
//@desc Add new contacts
// @access Private
router.get('/', (req, res) => {
    res.send('get all contacts');
});

//@route Get api/users
//@desc Get all users contacts
// @access Private
router.post('/', (req, res) => {
    res.send('get all contacts');
});

module.export =router;
