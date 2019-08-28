var express = require("express");
var router = express.Router();
var DataFilePatternController = require("../controller/DataFilePatternController");
//Get All User Roles
router.get("/", async (request, response) => {
  await DataFilePatternController.DataFilePatterns(request, response);
});

//Get User Role By Id
router.get("/:id", async (request, response) => {
  await DataFilePatternController.DataFilePatternById(request, response);
});

//search User Role By value
router.get("/search/:value", async (request, response) => {
  await DataFilePatternController.SearchDataFilePattern(request, response);
});

//create User Role
router.post("/", async (request, response) => {
  await DataFilePatternController.CreateDataFilePattern(request, response);
});

//update User Role
router.put("/:id", async (request, response) => {
  await DataFilePatternController.UpdateDataFilePattern(request, response);
});

module.exports = router;
