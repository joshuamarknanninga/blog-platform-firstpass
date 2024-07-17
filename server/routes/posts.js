const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

router.post('/', (req, res) => {
  const newPost = new Post({
    user: req.body.user,
    title: req.body.title,
    body: req.body.body,
    tags: req.body.tags
  });

  newPost.save().then(post => res.json(post));
});

router.get('/', (req, res) => {
  Post.find().sort({ date: -1 }).then(posts => res.json(posts));
});

router.get('/:id', (req, res) => {
  Post.findById(req.params.id).then(post => res.json(post));
});

router.delete('/:id', (req, res) => {
  Post.findById(req.params.id).then(post => {
    post.remove().then(() => res.json({ success: true }));
  }).catch(err => res.status(404).json({ postnotfound: 'No post found' }));
});

module.exports = router;
