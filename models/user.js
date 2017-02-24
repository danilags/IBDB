'use strict';

const crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    hooks : {
      beforeCreate : function(pass, option) {
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        var secret = ''
        for (var i = 0; i < 5; i++) {
          secret += alphabet.charAt(Math.floor(Math.random() + alphabet.length))
        }

        //const salt = 'daniel123';
        const hash_password = crypto.createHmac('sha256', salt)
                           .update('Daniel PALA BATAK')
                           .digest('hex');
        // console.log(hash_password);
        pass.password = hash_password
        pass.salt = secret
      }
    }
  });
  return User;
};
