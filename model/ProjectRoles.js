const Sequelize = require("sequelize");
// const Model = Sequelize.Model;
const sequelize = require("../data/connection");

const ProjectRole = sequelize.define(
  "project_role",
  {
    // attributes
    project_role_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    project_role_name: {
      type: Sequelize.STRING(300),
      allowNull: false
      // allowNull defaults to true
    }
  },
  {}
);

module.exports = ProjectRole;
