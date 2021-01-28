const User = require('../models/auth.model')
const jwt = require('jsonwebtoken')
const { transporter } = require('../config/nodemailer')
const { emailFormat } = require('../helpers/formats')

exports.registerController = async (req, res) => {
  const { email, password, nickname, birth_date, gender } = req.body
  
  User.findOne({ email }).exec((err, user) => {
      if (user) {
          return res.code(202).send({message: "Email is taken."})
      } else {

        const newUser = new User({
          email, password, nickname, birth_date, gender
        });

        newUser.save((err, createdUser) => {
          if (err) {
            return res.code(500).send({error: err})
          } else {

            const userId = createdUser._id
            
            const token = jwt.sign(
              {
                userId
              },
              process.env.JWT_ACCOUNT_ACTIVATION,
              {
                expiresIn: "60m",
              }
            );
            
            return res.status(200).send({
              token: token
            });
          }
        });

      }
    });
}

exports.loginController = async (req, res) => {
  const { login, password, rememberMe } = req.body;
  
  const expireTime = rememberMe ? "7d" : "60m"

  if (emailFormat.test(login)) {
    User.findOne({
      email: login
    }).exec((err, user) => {
      if (err || !user) {
        return res.code(202).send({
          error: "User with that email does not exist.",
        });
      }
      // authenticate
      if (!user.authenticate(password)) {
        return res.code(202).send({
          error: "Incorrect password.",
        });
      }
    
      const { _id } = user
  
      const token = user.generateToken(_id.toString(), expireTime)

      res.code(200).send({
            token,
      });
    });
  } else {
    User.findOne({
      nickname: login
    }).exec((err, user) => {
      if (err || !user) {
        return res.code(202).send({
          error: "User with that nickname does not exist.",
        });
      }
      // authenticate
      if (!user.authenticate(password)) {
        return res.code(202).send({
          error: "Incorrect password.",
        });
      }
    
      const { _id } = user
  
      const token = user.generateToken(_id.toString(), expireTime)

      res.code(200).send({
            token,
      });
    });
  }
};

exports.authController = async (req, res) => {
  const getToken = req.headers.authorization;
  const token = getToken.split(" ")[1];
  
  jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
    if (err) {
        return res.code(202).send({
          error: "Session expired - please log in again."
        });
    } else {

      return res.code(200).send({isAuth: true})
      }
    });
}