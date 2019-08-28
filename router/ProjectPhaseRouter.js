var express = require("express");
var router = express.Router();
var ProjectPhaseController = require("../controller/ProjectPhaseController");
//Get All User Roles
//Get All User Types
router.get("/", async (request, response) => {
  await ProjectPhaseController.ProjectPhases(request, response);
});

//Get User Type By Id
router.get("/:id", async (request, response) => {
  await ProjectPhaseController.ProjectPhaseById(request, response);
});

//search User Type By value
router.get("/:value", async (request, response) => {
  await ProjectPhaseController.SearchProjectPhase(request, response);
});

//create User Role
router.post("/", async (request, response) => {
  await ProjectPhaseController.CreateProjectPhase(request, response);
});

//update User Type
router.put("/:id", async (request, response) => {
  await ProjectPhaseController.UpdateProjectPhase(request, response);
});

module.exports = router;
