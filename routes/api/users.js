/** @format */

// for getting users

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

/**
 * @route   Get api/users
 * @desc    Register User
 * @access  Public
 */
// Header-> Content-Type:application/json
// Body -> Raw->{json input}

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    console.log(req.body);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // we can access data waith req.body
    res.send('User route');
  }
);

module.exports = router;
