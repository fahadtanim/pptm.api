const app_config = require("./app_config");

const express = require("express");
const bodyParser = require("body-parser");

//SERVICE MODULE
const ClientServices = require("./services/ClientServices");
const UserServices = require("./services/UserServices");

//APP CONFIGURATION
const app = express();

const PORT = process.env.PORT || app_config.port;
app.use(bodyParser.json());


//############ ROUTES #################
const ClientRouter = require("./router/ClientRouter");
const UserRoleRouter = require("./router/UserRoleRouter");


//######  CLIENT ROUTE ############

app.use("/api/clients",ClientRouter);

//######  USER ROLE ROUTE #########
app.use("/api/user_roles",UserRoleRouter);

//######  USER TYPE ROUTE ############

//Get All User Types
app.get("/api/user_types", async (req, res) => {
  let data = await UserTypeServices.getUserTypes();
  res.send(data);
});

//Get User Type By Id
app.get("/api/user_types/:id", async (req, res) => {
  let id = req.params.id;
  let data = await UserTypeServices.getUserTypeById(id);
  res.send(data);
});

//search User Type By value
app.get("/api/user_types/search/:value", async (req, res) => {
  let id = req.params.value;
  let data = await UserTypeServices.getUserTypesBySearchValue(id);
  res.send(data);
});

//create User Role
app.post("/api/user_types", async (req, res) => {
  let type_name = req.body.type_name;
  let type_label_color = req.body.type_label_color;
  let data = await UserTypeServices.createUserType(type_name, type_label_color);
  res.send(data);
});

//update User Type
app.put("/api/user_types/:id", async (req, res) => {
  let id = req.params.id;
  let req_data = req.body.data;
  let res_data = await UserTypeServices.updateUserType(id, req_data);
  res.send(res_data);
});

//######  USER TYPE CONTROLLER ENDS #######
//#########################################

//#########################################
//######  USER CONTROLLER ############

//Get All User
app.get("/api/users", async (req, res) => {
  let data = await UserServices.getUsers();
  res.send(data);
});

//Get User By Id
app.get("/api/users/:id", async (req, res) => {
  let id = req.params.id;
  let data = await UserServices.getUserById(id);
  res.send(data);
});

//search User By value
app.get("/api/users/search/:value", async (req, res) => {
  let search_value = req.params.value;
  let data = await UserServices.getUsersBySearchValue(search_value);
  res.send(data);
});

//create User Role
app.post("/api/users", async (req, res) => {
  let fullname = req.body.fullname;
  let username = req.body.username;
  let email = req.body.email;
  let user_role_id = req.body.user_role_id;
  let user_type_id = req.body.user_type_id;
  let data = await UserServices.createUser(
    fullname,
    username,
    email,
    user_role_id,
    user_type_id
  );
  res.send(data);
});

//update User
app.put("/api/users/:id", async (req, res) => {
  let id = req.params.id;
  let req_data = req.body.data;
  let res_data = await UserServices.updateUser(id, req_data);
  res.send(res_data);
});

//######  USER CONTROLLER ENDS #######
//#########################################

//SERVER

app.listen(PORT, () => {
  console.log("server started!!");
  //   console.log(app_config.port);
});
