const Sequelize = require("sequelize");
// const Model = Sequelize.Model;
const sequelize = require("../data/connection");

const FontTypes = sequelize.define(
  "font_type",
  {
    // attributes
    font_type_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    font_type_name: {
      type: Sequelize.STRING(200),
      allowNull: false
      // allowNull defaults to true
    }
  },
  {}
);

module.exports = FontTypes;
