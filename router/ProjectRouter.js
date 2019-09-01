var express = require("express");
var router = express.Router();
var ProjectController = require("../controller/ProjectController");
//All Projects
router.get("/", async (request,response) =>{
    await ProjectController.Projects(request,response);
});

//Projects by id

router.get("/project/:id", async (request,response) =>{
    await ProjectController.ProjectId(request,response);
});
//Projects by Cid

router.get("/project/client/:cid", async (request,response) =>{
    await ProjectController.ProjectsCid(request,response);
});

//Projects by project Name

router.get("/project/name/:project_name", async (request,response) =>{
    await ProjectController.ProjectName(request,response);
});

//Projects by Jid

router.get("/project/job/:jid", async (request,response) =>{
    await ProjectController.ProjectJid(request,response);
});

//Projects Search By value
router.get("/search/:value", async (request,response) =>{
    await ProjectController.SearchProject(request,response);
});

// Create New Projects
router.post("/", async (request,response) =>{
    await ProjectController.CreateProject(request,response);
});

//Update Projects
router.put("/:id", async (request,response) =>{
    await ProjectController.UpdateProject(request,response);
});

module.exports = router;