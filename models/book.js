'use strict';
module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define('Book', {
    book_name: DataTypes.STRING,
    url_image: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    penulis: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Book;
};