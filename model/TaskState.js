const Sequelize = require("sequelize");
// const Model = Sequelize.Model;
const sequelize = require("../data/connection");

const TaskState = sequelize.define(
  "task_state",
  {
    // attributes
    task_state_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    task_state_value: {
      type: Sequelize.STRING(300),
      allowNull: false
      // allowNull defaults to true
    }
  },
  {}
);

module.exports = TaskState;
