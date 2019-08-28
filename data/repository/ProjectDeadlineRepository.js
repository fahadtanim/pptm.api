const ProjectDeadline = require("../../model/ProjectDeadline");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class ProjectDeadlineRepository {
  constructor(ProjectDeadline, Op) {
    this.ProjectDeadline = ProjectDeadline;
    this.Op = Op;
  }

  async getProjectDeadlines() {
    return await this.ProjectDeadline.findAll();
  }

  async getProjectDeadlineById(id) {
    return await this.ProjectDeadline.findByPk(id);
  }

  async getProjectDeadlineByProjectId(project_id) {
    return await this.ProjectDeadline.findAll({
      where: {
        project_id: project_id
      }
    });
  }

  async getProjectDeadlinesBySearchValue(search_value) {
    return await this.ProjectDeadline.findAll({
      where: {
        [this.Op.or]: [
          {
            phase_name: {
              [this.Op.like]: "%" + search_value + "%"
            }
          }
        ]
      }
    });
  }

  async createProjectDeadline(deadline, deadline_name, project_id) {
    return await this.ProjectDeadline.create({
      deadline: deadline,
      deadline_name: deadline_name,
      project_id: project_id
    });
  }

  async updateProjectDeadline(id, project_deadline) {
    return await this.ProjectDeadline.update(project_deadline, {
      where: {
        deadline_id: id
      }
    });
  }
}

module.exports = new ProjectDeadlineRepository(ProjectDeadline, Op);
