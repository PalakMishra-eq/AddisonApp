const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

// const newUser = new User({
//   username: 'Palak',
//   email: 'palakm@email.com',
//   password: 'myPassword',
// });

// newUser.save();

module.exports = User;