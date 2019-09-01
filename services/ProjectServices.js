const ProjectRepository = require("../data/repository/ProjectRepository");

class ProjectServices {
  constructor() {
    this.ProjectRepository = ProjectRepository;
  }

  async getProjects() {
    return await this.ProjectRepository.getProjects();
  }

  async getProjectById(Project_id) {
    return await this.ProjectRepository.getProjectById(Project_id);
  }
  async getProjectsByCid(cid) {
    return await this.ProjectRepository.getProjectsByCid(cid);
  }
  async getProjectByJid(jid) {
    return await this.ProjectRepository.getProjectByJid(jid);
  }

  async getProjectsByProjectName(projeect_name) {
    return await this.ProjectRepository.getProjectByProjectName(projeect_name);
  }

  async getProjectsBySearchValue(search_data) {
    return await this.ProjectRepository.filterProject(search_data);
  }

  async CreateProject(project) {
    return await this.ProjectRepository.CreateProject(project);
  }
  async UpdateProject(id, project) {
    return await this.ProjectRepository.UpdateProject(id, project);
  }
}

module.exports = new ProjectServices();
