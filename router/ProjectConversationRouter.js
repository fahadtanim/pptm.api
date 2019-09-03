var express = require("express");
var router = express.Router();
var ProjectConversationController = require("../controller/ProjectConversationController");
//All ProjectConversations
router.get("/", async (request, response) => {
  await ProjectConversationController.ProjectConversations(request, response);
});

//ProjectConversations by id

router.get("/:id", async (request, response) => {
  await ProjectConversationController.ProjectConversationId(request, response);
});

//ProjectConversations by Project id

router.get("/project/:project_id", async (request, response) => {
  await ProjectConversationController.ProjectConversationProjectId(
    request,
    response
  );
});
//ProjectConversations by Project Name

router.get("/project/name/:project_name", async (request, response) => {
  await ProjectConversationController.ProjectConversationProjectName(
    request,
    response
  );
});

//ProjectConversations Search By value
router.get("/search/:value", async (request, response) => {
  await ProjectConversationController.SearchProjectConversation(
    request,
    response
  );
});

// Create New ProjectConversations
router.post("/", async (request, response) => {
  await ProjectConversationController.CreateProjectConversation(
    request,
    response
  );
});

// Create New ProjectConversations By name
router.post("/project_name", async (request, response) => {
  await ProjectConversationController.CreateProjectConversation(
    request,
    response
  );
});

//Update ProjectConversations
router.put("/:id", async (request, response) => {
  await ProjectConversationController.UpdateProjectConversation(
    request,
    response
  );
});

module.exports = router;
