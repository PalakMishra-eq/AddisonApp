// 'use strict';

// const jwt = require('jsonwebtoken');
// const { User } = require('./model');
// //const config = require('./config');
// const secretKey='mnm';

// const authenticateUser = async (request, h) => {
//   try {
//     const token = request.headers.authorization.split(' ')[1]; // Extract token from Authorization header

//     // Verify the token
//     const decoded = jwt.verify(token, secretKey);

//     // Find the user by ID extracted from the token
//     const user = await User.findById(decoded.user.id);

//     if (!user) {
//       return h.response({ error: 'Unauthorized - User not found' }).code(401);
//     }

//     // Attach the user object to the request
//     request.user = user;

//     return h.continue; // Proceed to the route handler
//   } catch (error) {
//     console.error('Authentication error:', error);
//     return h.response({ error: 'Unauthorized - Invalid token' }).code(401);
//   }
// };

// module.exports = authenticateUser;

