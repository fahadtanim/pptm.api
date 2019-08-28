const ProjectDeadlineRepository = require("../data/repository/ProjectDeadlineRepository");

class ProjectDeadlineServices {
  constructor(ProjectDeadlineRepository) {
    this.ProjectDeadlineRepository = ProjectDeadlineRepository;
  }

  async getProjectDeadlines() {
    return await this.ProjectDeadlineRepository.getProjectDeadlines();
  }

  async getProjectDeadlineById(id) {
    return await this.ProjectDeadlineRepository.getProjectDeadlineById(id);
  }

  async getProjectDeadlineByProjectId(project_id) {
    return await this.ProjectDeadlineRepository.getProjectDeadlineByProjectId(
      project_id
    );
  }

  async getProjectDeadlinesBySearchValue(search_value) {
    return await this.ProjectDeadlineRepository.getProjectDeadlinesBySearchValue(
      search_value
    );
  }

  async createProjectDeadline(name, color) {
    return await this.ProjectDeadlineRepository.createProjectDeadline(
      name,
      color
    );
  }
  async updateProjectDeadline(id, data) {
    return await this.ProjectDeadlineRepository.updateProjectDeadline(id, data);
  }
}

module.exports = new ProjectDeadlineServices(ProjectDeadlineRepository);
