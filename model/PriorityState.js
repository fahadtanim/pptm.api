const Sequelize = require("sequelize");
// const Model = Sequelize.Model;
const sequelize = require("../data/connection");

const PriorityState = sequelize.define(
  "priority_state",
  {
    // attributes
    priority_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    priority_value: {
      type: Sequelize.STRING(100),
      allowNull: false
      // allowNull defaults to true
    }
  },
  {}
);

module.exports = PriorityState;
