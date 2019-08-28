const ProjectEnrolledUserRepository = require("../data/repository/ProjectEnrolledUserRepository");

class ProjectEnrolledUserServices {
  constructor(ProjectEnrolledUserRepository) {
    this.ProjectEnrolledUserRepository = ProjectEnrolledUserRepository;
  }

  async getProjectEnrolledUsers() {
    return await this.ProjectEnrolledUserRepository.getProjectEnrolledUsers();
  }

  async getProjectEnrolledUserByUserId(id) {
    return await this.ProjectEnrolledUserRepository.getProjectEnrolledUserByUserId(
      id
    );
  }

  async getProjectEnrolledUserByProjectId(project_id) {
    return await this.ProjectEnrolledUserRepository.getProjectEnrolledUserByProjectId(
      project_id
    );
  }

  async getProjectEnrolledUserByProjectName(project_name) {
    return await this.ProjectEnrolledUserRepository.getProjectEnrolledUserByProjectName(
      project_name
    );
  }

  async getProjectEnrolledUsersBySearchValue(search_value) {
    return await this.ProjectEnrolledUserRepository.getProjectEnrolledUsersBySearchValue(
      search_value
    );
  }

  async createProjectEnrolledUser(
    project_id,
    project_name,
    user_id,
    project_role_id
  ) {
    return await this.ProjectEnrolledUserRepository.createProjectEnrolledUser(
      project_id,
      project_name,
      user_id,
      project_role_id
    );
  }
  async updateProjectEnrolledUser(project_id, user_id, data) {
    return await this.ProjectEnrolledUserRepository.updateProjectEnrolledUser(
      project_id,
      user_id,
      data
    );
  }
}

module.exports = new ProjectEnrolledUserServices(ProjectEnrolledUserRepository);
