const Sequelize = require('sequelize');
const db = require('../db');

const Sneaker = db.define('sneaker', {
  shoeName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  styleId: {
    type: Sequelize.STRING,
    allowNull: false
  }

})
