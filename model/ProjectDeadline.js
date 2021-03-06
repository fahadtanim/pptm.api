const Sequelize = require("sequelize");
// const Model = Sequelize.Model;
const sequelize = require("../data/connection");
const Project = require("./Project");

const ProjectDeadline = sequelize.define(
  "project_deadline",
  {
    // attributes
    deadline_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    deadline_name: {
      type: Sequelize.STRING(300),
      allowNull: false
    },
    deadline: {
      type: Sequelize.DATE,
      allowNull: false
    },
    project_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    }
  },
  {}
);

// ProjectDeadline.belongsTo(Project, {
//   foreignKey: "project_id",
//   targetKey: "project_id"
// });

module.exports = ProjectDeadline;
