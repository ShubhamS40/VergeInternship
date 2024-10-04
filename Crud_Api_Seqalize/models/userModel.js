const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');  // Adjust path as necessary

// Define the User model
const User = sequelize.define('User', {
  First_Name: {
    type: DataTypes.STRING,
    allowNull: false,  // Optional: Make this field required
  },
  Last_Name: {
    type: DataTypes.STRING,
    allowNull: false,  // Optional: Make this field required
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,  // Optional: Make this field required
    unique: true,  // Ensure email addresses are unique
  },
  Contact_No: {
    type: DataTypes.STRING,
    allowNull: false,  // Optional: Make this field required
  },
});

// Export the User model
module.exports = { User };
