/** @format */

//  handling json web token for authentication

/** @format */

// for getting users

const express = require('express');
const router = express.Router();

/**
 * @route   Get api/auth
 * @desc    Test route
 * @access  Public
 */

router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;
