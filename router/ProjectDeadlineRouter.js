var express = require("express");
var router = express.Router();
var ProjectDeadlineController = require("../controller/ProjectDeadlineController");

//Get All Project Deadlines
router.get("/", async (request, response) => {
  await ProjectDeadlineController.ProjectDeadlines(request, response);
});

//Get Project Deadline By Id
router.get("/:id", async (request, response) => {
  await ProjectDeadlineController.ProjectDeadlineById(request, response);
});

//Get Project Deadline By Project Id
router.get("projects/:project_id", async (request, response) => {
  await ProjectDeadlineController.ProjectDeadlineByProjectId(request, response);
});

//search Project Deadline By value
router.get("/:value", async (request, response) => {
  await ProjectDeadlineController.SearchProjectDeadline(request, response);
});

//create Project Deadline
router.post("/", async (request, response) => {
  await ProjectDeadlineController.CreateProjectDeadline(request, response);
});

//update Project Deadline
router.put("/:id", async (request, response) => {
  await ProjectDeadlineController.UpdateProjectDeadline(request, response);
});

module.exports = router;
