const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  title: { type: String, required: true },
  body: { type: String, required: true },
  tags: { type: [String], required: false },
  date: { type: Date, default: Date.now },
  comments: [
    {
      user: { type: Schema.Types.ObjectId, ref: 'users' },
      text: { type: String, required: true },
      date: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model('posts', PostSchema);
