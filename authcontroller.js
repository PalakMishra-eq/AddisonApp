'use strict';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('./models');
//  const config = require('./config');
const secretKey='mnm';

const loginHandler = async (request, h) => {
  const { email, password } = request.payload;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return h.response({ error: 'Invalid credentials' }).code(401);
    }

    // brcypt compare
    const isPasswordValid = await bcrypt.compare(password, user.password);


    // Check if the password is correct
    if (!isPasswordValid) {
      return h.response({ error: 'Invalid credentials' }).code(401);
    }

    // Create a JWT token with user information
    const token = jwt.sign({ user: { id: user._id, email: user.email } }, secretKey, { expiresIn: '1h' });

    // Send the token in the response
    return h.response({ token });
  } catch (error) {
    console.error(error);
    return h.response({ error: 'Internal Server Error' }).code(500);
  }
};

const authRoutes = [
  {
    method: 'POST',
    path: '/login',
    handler: loginHandler,
  },
];

module.exports = authRoutes;





// bcrypt.compare("B4c0/\/", hash, function(err, res) {
//  // res === true
// });
