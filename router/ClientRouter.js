var express = require("express");
var router = express.Router();
var ClientController = require("../controller/ClientController");
//All Clients
router.get("/", async (request, response) => {
  await ClientController.Clients(request, response);
});

//All Clients

router.get("/page/:page", async (request, response) => {
  await ClientController.ClientsWithPaginator(request, response);
});

//Clients by id

router.get("/:id", async (request, response) => {
  await ClientController.ClientId(request, response);
});

router.get("/page/search/:value/:page", async (request, response) => {
  await ClientController.SearchClientWithPaginator(request, response);
});
//Clients Search By value
router.get("/search/:value", async (request, response) => {
  await ClientController.SearchClient(request, response);
});

// Create New Clients
router.post("/", async (request, response) => {
  await ClientController.CreateClient(request, response);
});

//Update Clients
router.put("/:id", async (request, response) => {
  await ClientController.UpdateClient(request, response);
});

module.exports = router;
