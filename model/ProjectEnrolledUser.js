const Sequelize = require("sequelize");
// const Model = Sequelize.Model;
const sequelize = require("../data/connection");
const User = require("./User");
const ProjectRole = require("./ProjectRole");

const ProjectEnrolledUser = sequelize.define(
  "project_enrolled_user",
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

ProjectEnrolledUser.removeAttribute("id");

ProjectEnrolledUser.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "user_id",
  as: "user"
});

ProjectEnrolledUser.belongsTo(ProjectRole, {
  foreignKey: "project_role_id",
  targetKey: "project_role_id",
  as: "project_role"
});
module.exports = ProjectEnrolledUser;
