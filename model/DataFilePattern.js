const Sequelize = require("sequelize");
// const Model = Sequelize.Model;
const sequelize = require("../data/connection");

const DataFilePattern = sequelize.define(
  "data_file_pattern",
  {
    // attributes
    data_file_pattern_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    data_file_pattern_name: {
      type: Sequelize.STRING(200),
      allowNull: false
      // allowNull defaults to true
    }
  },
  {}
);

module.exports = DataFilePattern;
