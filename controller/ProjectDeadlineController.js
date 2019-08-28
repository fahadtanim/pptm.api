const ProjectDeadlineServices = require("../services/ProjectDeadlineServices.js");

class ProjectDeadlineController {
  //Get All User Roles
  constructor(ProjectDeadlineServices) {
    this.ProjectDeadlineServices = ProjectDeadlineServices;
  }
  async ProjectDeadlines(request, response) {
    response.send(ProjectDeadlineServices.getProjectDeadlines());
  }

  //Get User Role By Id
  async ProjectDeadlineById(request, response) {
    response.send(
      await ProjectDeadlineServices.getProjectDeadlineById(request.params.id)
    );
  }

  async ProjectDeadlineByProjectId(request, response) {
    response.send(
      await ProjectDeadlineServices.getProjectDeadlineByProjectId(
        request.params.project_id
      )
    );
  }

  //search User Role By value
  async SearchProjectDeadline(request, response) {
    response.send(
      await ProjectDeadlineServices.getProjectDeadlinesBySearchValue(
        request.params.value
      )
    );
  }

  //create User Role
  async CreateProjectDeadline(request, response) {
    let data = await ProjectDeadlineServices.createProjectDeadline(
      request.body.deadline,
      request.body.deadline_name,
      request.body.project_id
    );
    response.send(data);
  }

  //update User Role
  async UpdateProjectDeadline(request, response) {
    response.send(
      await ProjectDeadlineServices.updateProjectDeadline(
        request.params.id,
        request.body.data
      )
    );
  }
}

module.exports = new ProjectDeadlineController(ProjectDeadlineServices);
