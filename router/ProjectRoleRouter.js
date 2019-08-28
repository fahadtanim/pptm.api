var express = require("express");
var router = express.Router();
var ProjectRoleController = require("../controller/ProjectRoleController");
//Get All Project Roles
router.get("/", async (request, response) => {
  await ProjectRoleController.ProjectRoles(request, response);
});

//Get Project Role By Id
router.get("/:id", async (request, response) => {
  await ProjectRoleController.ProjectRoleById(request, response);
});

//search Project Role By value
router.get("/search/:value", async (request, response) => {
  await ProjectRoleController.SearchProjectRole(request, response);
});

//create Project Role
router.post("/", async (request, response) => {
  await ProjectRoleController.CreateProjectRole(request, response);
});

//update Project Role
router.put("/:id", async (request, response) => {
  await ProjectRoleController.UpdateProjectRole(request, response);
});

module.exports = router;
