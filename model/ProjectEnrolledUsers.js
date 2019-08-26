const Sequelize = require("sequelize");
// const Model = Sequelize.Model;
const sequelize = require("../data/connection");

const ProjectEnrolledUsers = sequelize.define(
  "project_enrolled_users",
  {
    // attributes
    project_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    project_name: {
      type: Sequelize.STRING(200),
      allowNull: false
      // allowNull defaults to true
    },
    user_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    project_role_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    }
  },
  {}
);

module.exports = ProjectEnrolledUsers;
