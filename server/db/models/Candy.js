const Sequelize = require('sequelize');
const db = require('../database');

// definition of Candy model
const Candy = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '../../../public/bg.jpg',
    validate: {
      isUrl: true,
    },
  },
});

module.exports = Candy;
