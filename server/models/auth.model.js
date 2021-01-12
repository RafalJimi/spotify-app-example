const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: String,
    nickname: {
      type: String,
      trim: true,
      required: true,
    },
    birth_date: {
      type: String,
      trim: true,
      required: true,
    },
    gender: {
      type: String,
      default: "man"
    },
    fav_songs: {
      type: Array,
      default: [],
    },
    resetPasswordLink: {
      data: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },

  generateToken: function (id) {
    const salt = crypto.randomBytes(16)
    var genSalt = function(){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex')
            .slice(0, 10);
};
    const token = genSalt + id
    
    const userToken = jwt.sign(
      {
          token: token
      },
      process.env.JWT_ACCOUNT_ACTIVATION,
      {
        expiresIn: "60m",
      }
    );
    
    return userToken
  },
  
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
};

module.exports = mongoose.model("User", userSchema);