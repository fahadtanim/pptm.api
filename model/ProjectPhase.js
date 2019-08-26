const Sequelize = require("sequelize");
// const Model = Sequelize.Model;
const sequelize = require("../data/connection");

const ProjectPhase = sequelize.define(
  "project_phase",
  {
    // attributes
    phase_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    phase_name: {
      type: Sequelize.STRING(300),
      allowNull: false
      // allowNull defaults to true
    },
    label_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    }
  },
  {}
);

module.exports = ProjectPhase;
