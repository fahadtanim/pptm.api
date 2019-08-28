const ProjectRoleRepository = require("../data/repository/ProjectRoleRepository");

class ProjectRoleServices {
  constructor(ProjectRoleRepository) {
    this.ProjectRoleRepository = ProjectRoleRepository;
  }

  async getProjectRoles() {
    return await this.ProjectRoleRepository.getProjectRoles();
  }

  async getProjectRoleById(id) {
    return await this.ProjectRoleRepository.getProjectRoleById(id);
  }

  async getProjectRolesBySearchValue(search_value) {
    return await this.ProjectRoleRepository.getProjectRolesBySearchValue(
      search_value
    );
  }

  async createProjectRole(data) {
    return await this.ProjectRoleRepository.createProjectRole(data);
  }

  async updateProjectRole(id, data) {
    return await this.ProjectRoleRepository.updateProjectRole(id, data);
  }
}

module.exports = new ProjectRoleServices(ProjectRoleRepository);
