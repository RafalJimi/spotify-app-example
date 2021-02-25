const jwt = require('jsonwebtoken')
const User = require('../models/auth.model')

exports.isAuth = (req, res, done) => {
  const getToken = req.headers.authorization;
  const token = getToken.split(" ")[1];
  
  jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
    if (err) {
      return res.code(202).send({
        error: "Session expired - please log in again."
      });
    } else {
      const { userToken } = jwt.decode(token);
        
      if (userToken) {
        const userID = userToken.split(".")[1]
        
       User.findOne({
          _id: userID
        }).exec((err, user) => {
          if (err || !user) {
            return res.status(203).send({
              error: 'User not found'
            });
          }
          
          req.profile = user;
          done()
        })
      }
    }
  });
}