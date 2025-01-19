const mongoose = require('mongoose');

const creatorAccountSchema = new mongoose.Schema({
  name: String,
  youtubeChannelId: String,
  price: Number,
  currency: String, // USD or BTC
});

module.exports = mongoose.model('CreatorAccount',
