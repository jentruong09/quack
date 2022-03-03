const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try {
    const dbPostData = await Post.findAll({})
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
