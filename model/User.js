const Sequelize = require("sequelize");
const sequelize = require("../data/connection");
const UserRole = require("./UserRole");
const UserType = require("./UserType");

const User = sequelize.define(
  "user",
  {
    // attributes
    user_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fullname: {
      type: Sequelize.STRING(100),
      allowNull: false
      // allowNull defaults to true
    },
    email: {
      type: Sequelize.STRING(200),
      allowNull: false
      // allowNull defaults to true
    },
    username: {
      type: Sequelize.STRING(200),
      allowNull: false
      // allowNull defaults to true
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    user_role_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    user_type_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    }
  },
  {}
);

User.belongsTo(UserRole, {
  foreignKey: "user_role_id",
  targetKey: "role_id",
  as: "user_role"
});
User.belongsTo(UserType, {
  foreignKey: "user_type_id",
  targetKey: "type_id",
  as: "user_type"
});

module.exports = User;
