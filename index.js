const app_config = require("./app_config");

const express = require("express");
const bodyParser = require("body-parser");

//APP CONFIGURATION
const app = express();

const PORT = process.env.PORT || app_config.port;
app.use(bodyParser.json());

//############ ROUTES #################
const ClientRouter = require("./router/ClientRouter");
const UserRoleRouter = require("./router/UserRoleRouter");
const UserTypeRouter = require("./router/UserTypeRouter");
const UserRouter = require("./router/UserRouter");

//######  CLIENT ROUTE ############

app.use("/api/clients", ClientRouter);

//######  USER ROLE ROUTE #########
app.use("/api/user_roles", UserRoleRouter);

//######  USER TYPE ROUTE ############

app.use("/api/user_types", UserTypeRouter);

//######  USER CONTROLLER ############

app.use("/api/users", UserRouter);

//SERVER

app.listen(PORT, () => {
  console.log("server started!!");
  //   console.log(app_config.port);
});
