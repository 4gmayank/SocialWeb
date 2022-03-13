/** @format */

//  fetching profile, adding them, updating them.

const express = require('express');
const router = express.Router();

/**
 * @route   Get api/Profiles
 * @desc    Test route
 * @access  Public
 */

router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;
