const ProjectPhaseServices = require("../services/ProjectPhaseServices.js");

class ProjectPhaseController {
  //Get All User Roles
  constructor(ProjectPhaseServices) {
    this.ProjectPhaseServices = ProjectPhaseServices;
  }
  async ProjectPhases(request, response) {
    response.send(ProjectPhaseServices.getProjectPhases());
  }

  //Get User Role By Id
  async ProjectPhaseById(request, response) {
    response.send(
      await ProjectPhaseServices.getProjectPhaseById(request.params.id)
    );
  }

  //search User Role By value
  async SearchProjectPhase(request, response) {
    response.send(
      await ProjectPhaseServices.getProjectPhasesBySearchValue(
        request.params.value
      )
    );
  }

  //create User Role
  async CreateProjectPhase(request, response) {
    let data = await ProjectPhaseServices.createProjectPhase(
      request.body.phase_name,
      request.body.label_id
    );
    response.send(data);
  }

  //update User Role
  async UpdateProjectPhase(request, response) {
    response.send(
      await ProjectPhaseServices.updateProjectPhase(
        request.params.id,
        request.body.data
      )
    );
  }
}

module.exports = new ProjectPhaseController(ProjectPhaseServices);
