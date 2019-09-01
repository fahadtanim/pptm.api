const ProjectServices = require("../services/ProjectServices");

class ProjectController {
  async Projects(request, response) {
    response.send(await ProjectServices.getProjects());
  }

  async ProjectsCid(request, response){
    response.send(await ProjectServices.getProjectByCid(request.params.cid));
  }

  async ProjectId(request, response) {
    response.send(await ProjectServices.getProjectById(request.params.id));
  }

  async ProjectJid(request, response) {
    response.send(await ProjectServices.getProjectByJid(request.params.jid));
  }

  async ProjectName(request, response) {
    response.send(await ProjectServices.getProjectByProjectName(request.params.project_name));
  }

  async SearchProject(request, response) {
    response.send(
      await ProjectServices.getProjectsBySearchValue(request.params.value)
    );
  }

  async CreateProject(request, response) {
    response.send(
      await ProjectServices.CreateProject(
        request.body.data
      )
    );
  }
  async UpdateProject(request, response) {
    response.send(await ProjectServices.UpdateProject(request.params.id, request.body.data));
  }
}

module.exports = new ProjectController();
