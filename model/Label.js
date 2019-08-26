const Sequelize = require("sequelize");
// const Model = Sequelize.Model;
const sequelize = require("../data/connection");

const Label = sequelize.define(
  "label",
  {
    // attributes
    label_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    label_name: {
      type: Sequelize.STRING(300),
      allowNull: false
      // allowNull defaults to true
    },
    label_value: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    }
  },
  {}
);

module.exports = Label;
