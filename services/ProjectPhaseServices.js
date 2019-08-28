const ProjectPhaseRepository = require("../data/repository/ProjectPhaseRepository");

class ProjectPhaseServices {
  constructor(ProjectPhaseRepository) {
    this.ProjectPhaseRepository = ProjectPhaseRepository;
  }

  async getProjectPhases() {
    return await this.ProjectPhaseRepository.getProjectPhases();
  }

  async getProjectPhaseById(id) {
    return await this.ProjectPhaseRepository.getProjectPhaseById(id);
  }

  async getProjectPhasesBySearchValue(search_value) {
    return await this.ProjectPhaseRepository.getProjectPhasesBySearchValue(
      search_value
    );
  }

  async createProjectPhase(name, color) {
    return await this.ProjectPhaseRepository.createProjectPhase(name, color);
  }
  async updateProjectPhase(id, data) {
    return await this.ProjectPhaseRepository.updateProjectPhase(id, data);
  }
}

module.exports = new ProjectPhaseServices(ProjectPhaseRepository);
