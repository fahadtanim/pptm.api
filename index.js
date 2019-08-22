const app_config = require("./app_config");

const express = require("express");
const bodyParser = require("body-parser");

//SERVICE MODULE
const ClientServices = require("./services/ClientServices");
const UserRoleServices = require("./services/UserRoleServices");
const UserTypeServices = require("./services/UserTypeServices");
const UserServices = require("./services/UserServices");

//APP CONFIGURATION
const app = express();

const PORT = process.env.PORT || app_config.port;
app.use(bodyParser.json());

//######################################
//######  CLIENT CONTROLLER ############

//All Clients
app.get("/api/clients", async (req, res) => {
  let data = await ClientServices.getClients();
  res.send(data);
});

//Clients by id

app.get("/api/clients/:id", async (req, res) => {
  let client_id = req.params.id;
  let data = await ClientServices.getClientById(client_id);
  res.send(data);
});

//Clients Search By value
app.get("/api/clients/search/:value", async (req, res) => {
  let search_value = req.params.value;
  let data = await ClientServices.getClientsBySearchValue(search_value);
  res.send(data);
});

// Create New Clients
app.post("/api/clients", async (req, res) => {
  let cid = req.body.cid;
  let client_name = req.body.client_name;
  let client_description = req.body.client_description;
  // console.log(cid);
  let data = await ClientServices.CreateClient(
    cid,
    client_name,
    client_description
  );
  res.send(data);
});

//Update Clients
app.put("/api/clients/:id", async (req, res) => {
  let id = req.params.id;
  let req_data = req.body.data;
  let data = await ClientServices.UpdateClient(id, req_data);
  res.send(data);
});

//######  CLIENT CONTROLLER ENDS #######
//######################################

//######################################
//######  USER ROLE CONTROLLER #########

//Get All User Roles
app.get("/api/user_roles", async (req, res) => {
  let data = await UserRoleServices.getUserRoles();
  res.send(data);
});

//Get User Role By Id
app.get("/api/user_roles/:id", async (req, res) => {
  let id = req.params.id;
  let data = await UserRoleServices.getUserRoleById(id);
  res.send(data);
});

//search User Role By value
app.get("/api/user_roles/search/:value", async (req, res) => {
  let id = req.params.value;
  let data = await UserRoleServices.getUserRolesBySearchValue(id);
  res.send(data);
});

//create User Role
app.post("/api/user_roles", async (req, res) => {
  let role_name = req.body.role_name;
  let data = await UserRoleServices.createUserRole(role_name);
  res.send(data);
});

//update User Role
app.put("/api/user_roles/:id", async (req, res) => {
  let id = req.params.id;
  let req_data = req.body.data;
  let res_data = await UserRoleServices.updateUserRole(id, req_data);
  res.send(res_data);
});

//######  USER ROLE CONTROLLER ENDS #######
//#########################################

//#########################################
//######  USER TYPE CONTROLLER ############

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
