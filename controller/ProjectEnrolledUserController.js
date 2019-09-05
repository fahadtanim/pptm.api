const ProjectEnrolledUserServices = require("../services/ProjectEnrolledUserServices.js");

class ProjectEnrolledUserController {
  //Get All Project Enrolled Users
  constructor(ProjectEnrolledUserServices) {
    this.ProjectEnrolledUserServices = ProjectEnrolledUserServices;
  }
  async ProjectEnrolledUsers(request, response) {
    console.log("came");
    response.send(await ProjectEnrolledUserServices.getProjectEnrolledUsers());
  }

  //Get Project Enrolled User By Id
  async ProjectEnrolledUserByUserId(request, response) {
    response.send(
      await ProjectEnrolledUserServices.getProjectEnrolledUserByUserId(
        request.params.user_id
      )
    );
  }

  async ProjectEnrolledUserByProjectId(request, response) {
    response.send(
      await ProjectEnrolledUserServices.getProjectEnrolledUserByProjectId(
        request.params.project_id
      )
    );
  }

  async ProjectEnrolledUserByProjectName(request, response) {
    response.send(
      await ProjectEnrolledUserServices.getProjectEnrolledUserByProjectName(
        request.params.project_name
      )
    );
  }

  //search Project Enrolled User By value
  async SearchProjectEnrolledUser(request, response) {
    response.send(
      await ProjectEnrolledUserServices.getProjectEnrolledUsersBySearchValue(
        request.params.value
      )
    );
  }

  //create Project Enrolled User
  async CreateProjectEnrolledUser(request, response) {
    let data = await ProjectEnrolledUserServices.createProjectEnrolledUser(
      request.body.project_id,
      request.body.project_name,
      request.body.user_id,
      request.body.project_role_id
    );
    response.send(data);
  }

  //update Project Enrolled User
  async UpdateProjectEnrolledUser(request, response) {
    response.send(
      await ProjectEnrolledUserServices.updateProjectEnrolledUser(
        request.params.project_id,
        request.params.user_id,
        request.body.data
      )
    );
  }
}

module.exports = new ProjectEnrolledUserController(ProjectEnrolledUserServices);
