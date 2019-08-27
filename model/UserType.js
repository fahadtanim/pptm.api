const Sequelize = require("sequelize");
// const Model = Sequelize.Model;
const sequelize = require("../data/connection");

const UserType = sequelize.define(
  "user_type",
  {
    // attributes
    type_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type_name: {
      type: Sequelize.STRING(100),
      allowNull: false
      // allowNull defaults to true
    },
    type_label_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    }
  },
  {}
);

module.exports = UserType;
