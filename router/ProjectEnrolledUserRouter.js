var express = require("express");
var router = express.Router();
var ProjectEnrolledUserController = require("../controller/ProjectEnrolledUserController");

//Get All Project Deadlines
router.get("/", async (request, response) => {
  await ProjectEnrolledUserController.ProjectEnrolledUsers(request, response);
});

//Get Project Deadline By Id
router.get("users/:user_id", async (request, response) => {
  await ProjectEnrolledUserController.ProjectEnrolledUserByUserId(
    request,
    response
  );
});

//Get Project Deadline By Project Id
router.get("projects/:project_id", async (request, response) => {
  await ProjectEnrolledUserController.ProjectEnrolledUserByProjectId(
    request,
    response
  );
});

router.get("projects/name/:project_name", async (request, response) => {
  await ProjectEnrolledUserController.ProjectEnrolledUserByProjectName(
    request,
    response
  );
});

//search Project Deadline By value
router.get("/:value", async (request, response) => {
  await ProjectEnrolledUserController.SearchProjectEnrolledUser(
    request,
    response
  );
});

//create Project Deadline
router.post("/", async (request, response) => {
  await ProjectEnrolledUserController.CreateProjectEnrolledUser(
    request,
    response
  );
});

//update Project Deadline
router.put("/:project_id/:user_id", async (request, response) => {
  await ProjectEnrolledUserController.UpdateProjectEnrolledUser(
    request,
    response
  );
});

module.exports = router;
