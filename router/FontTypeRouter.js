var express = require("express");
var router = express.Router();
var FontTypeController = require("../controller/FontTypeController");
//Get All User Roles
router.get("/", async (request, response) => {
  await FontTypeController.FontTypes(request, response);
});

//Get User Role By Id
router.get("/:id", async (request, response) => {
  await FontTypeController.FontTypeById(request, response);
});

//search User Role By value
router.get("/search/:value", async (request, response) => {
  await FontTypeController.SearchFontType(request, response);
});

//create User Role
router.post("/", async (request, response) => {
  await FontTypeController.CreateFontType(request, response);
});

//update User Role
router.put("/:id", async (request, response) => {
  await FontTypeController.UpdateFontType(request, response);
});

module.exports = router;
