const Sequelize = require("sequelize");
const app_config = require("../app_config");

const sequelize = new Sequelize(
  app_config.sqlDatabase.databaseName,
  app_config.sqlDatabase.username,
  app_config.sqlDatabase.password,
  {
    host: app_config.sqlDatabase.host,
    dialect: "mysql",
    define: {
      timestamps: false
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
