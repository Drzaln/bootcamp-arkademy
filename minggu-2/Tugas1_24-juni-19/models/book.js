'use strict';
module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define('book', {
    bookid: DataTypes.INTEGER,
    nama_buku: DataTypes.CHAR,
    penulis: DataTypes.CHAR,
    lokasi: DataTypes.CHAR,
    kategori: DataTypes.TEXT
  }, {});
  book.associate = function(models) {
    // associations can be defined here
  };
  return book;
};