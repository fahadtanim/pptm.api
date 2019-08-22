const Sequelize = require("sequelize");
// const Model = Sequelize.Model;
const sequelize = require("../data/connection");

const UserRole = sequelize.define(
  "user_role",
  {
    // attributes
    role_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role_name: {
      type: Sequelize.STRING(100),
      allowNull: false
      // allowNull defaults to true
    }
  },
  {}
);

module.exports = UserRole;
