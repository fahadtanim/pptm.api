const ProjectPhase = require("../../model/ProjectPhase");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class ProjectPhaseRepository {
  constructor(ProjectPhase, Op) {
    this.ProjectPhase = ProjectPhase;
    this.Op = Op;
  }

  async getProjectPhases() {
    return await this.ProjectPhase.findAll();
  }

  async getProjectPhaseById(id) {
    return await this.ProjectPhase.findByPk(id);
  }

  async getProjectPhasesBySearchValue(search_value) {
    return await this.ProjectPhase.findAll({
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

  async createProjectPhase(phase_name, type_label_id) {
    return await this.ProjectPhase.create({
      phase_name: phase_name,
      type_label_id: type_label_id
    });
  }

  async updateProjectPhase(id, project_phase) {
    return await this.ProjectPhase.update(project_phase, {
      where: {
        phase_id: id
      }
    });
  }
}

module.exports = new ProjectPhaseRepository(ProjectPhase, Op);
