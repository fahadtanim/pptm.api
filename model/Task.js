const Sequelize = require("sequelize");
// const Model = Sequelize.Model;
const sequelize = require("../data/connection");
// class project extends Model {}

const Task = sequelize.define(
  "task",
  {
    // attributes
    task_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    project_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    task_name: {
      type: Sequelize.STRING(200),
      allowNull: false
      // allowNull defaults to true
    },
    task_token: {
      type: Sequelize.STRING(200),
      allowNull: false
      // allowNull defaults to true
    },
    shortnote: {
      type: Sequelize.STRING(500),
      allowNull: false
      // allowNull defaults to true
    },
    deadline: {
      type: Sequelize.DATE,
      allowNull: false
      // allowNull defaults to true
    },
    created_time: {
      type: Sequelize.DATE,
      allowNull: false
      // allowNull defaults to true
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true
      // allowNull defaults to true
    },
    priority_state_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    task_state_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    label_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    }
  },
  {}
);

module.exports = Project;
