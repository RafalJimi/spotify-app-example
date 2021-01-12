const User = require('../models/auth.model')
const jwt = require('jsonwebtoken')
const { transporter } = require('../config/nodemailer')

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