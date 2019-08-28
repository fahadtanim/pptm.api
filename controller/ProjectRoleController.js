const ProjectRoleServices = require("../services/ProjectRoleServices");

class ProjectRoleController {
  //Get All Project Roles
  constructor(ProjectRoleServices) {
    this.ProjectRoleServices = ProjectRoleServices;
  }
  async ProjectRoles(request, response) {
    response.send(ProjectRoleServices.getProjectRoles());
  }

  //Get Project Role By Id
  async ProjectRoleById(request, response) {
    response.send(
      await ProjectRoleServices.getProjectRoleById(request.params.id)
    );
  }

  //search Project Role By value
  async SearchProjectRole(request, response) {
    response.send(
      await ProjectRoleServices.getProjectRolesBySearchValue(
        request.params.value
      )
    );
  }

  //create Project Role
  async CreateProjectRole(request, response) {
    let data = await ProjectRoleServices.createProjectRole(
      request.body.role_name
    );
    response.send(data);
  }

  //update Project Role
  async UpdateProjectRole(request, response) {
    response.send(
      await ProjectRoleServices.updateProjectRole(
        request.params.id,
        request.body.data
      )
    );
  }
}

module.exports = new ProjectRoleController(ProjectRoleServices);
