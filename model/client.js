const Sequelize = require("sequelize");
// const Model = Sequelize.Model;
const sequelize = require("../data/connection");
// class Client extends Model {}

const Client = sequelize.define(
  "client",
  {
    // attributes
    client_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cid: {
      type: Sequelize.STRING(100),
      allowNull: false
      // allowNull defaults to true
    },
    client_name: {
      type: Sequelize.STRING(200),
      allowNull: false
      // allowNull defaults to true
    },
    client_description: {
      type: Sequelize.STRING(500),
      allowNull: true
      // allowNull defaults to true
    }
  },
  {}
);

module.exports = Client;
