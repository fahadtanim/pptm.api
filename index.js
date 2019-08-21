const app_config = require("./app_config");

const express = require("express");
const bodyParser = require("body-parser");

//SERVICE MODULE
const ClientService = require("./services/clientServices");

//APP CONFIGURATION
const app = express();

const PORT = process.env.PORT || app_config.port;
app.use(bodyParser.json());

//######  CLIENT CONTROLLER #######

//All Clients
app.get("/api/clients", async (req, res) => {
  let data = await ClientService.getClients();
  res.send(data);
});

//Clients by id

app.get("/api/clients/:id", async (req, res) => {
  let client_id = req.params.id;
  let data = await ClientService.getClientById(client_id);
  res.send(data);
});

//Clients Search By value
app.get("/api/clients/search/:value", async (req, res) => {
  let search_value = req.params.value;
  let data = await ClientService.getClientsBySearchValue(search_value);
  res.send(data);
});

// Create New Clients
app.post("/api/clients", async (req, res) => {
  let cid = req.body.cid;
  let client_name = req.body.client_name;
  let client_description = req.body.client_description;
  // console.log(cid);
  let data = await ClientService.CreateClient(
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
  let data = await ClientService.UpdateClient(id, req_data);
  res.send(data);
});

//SERVER

app.listen(PORT, () => {
  console.log("server started!!");
  //   console.log(app_config.port);
});
