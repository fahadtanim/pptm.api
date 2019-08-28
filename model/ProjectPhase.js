const Sequelize = require("sequelize");
// const Model = Sequelize.Model;
const sequelize = require("../data/connection");
const Label = require("../model/Label");
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

ProjectPhase.belongsTo(Label, {
  foreignKey: "label_id",
  targetKey: "label_id",
  as: "label"
});

module.exports = ProjectPhase;
