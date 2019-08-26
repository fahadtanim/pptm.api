const ProjectRole = require("../../model/ProjectRole");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
class ProjectRoleRepository {
  constructor(ProjectRole, Op) {
    this.ProjectRole = ProjectRole;
    this.Op = Op;
  }

  async getProjectRoles() {
    return await this.ProjectRole.findAll();
  }

  async getProjectRoleById(project_role_id) {
    return await this.ProjectRole.findByPk(project_role_id);
  }

  async getProjectRolesBySearchValue(search_value) {
    return await this.ProjectRole.findAll({
      where: {
        [this.Op.or]: [
          {
            project_role_name: {
              [this.Op.like]: "%" + search_value + "%"
            }
          }
        ]
      }
    });
  }

  async CreateProjectRole(name) {
    return await this.ProjectRole.create({
      project_role_name: name
    });
  }

  async UpdateProjectRole(id, ProjectRole) {
    return await this.ProjectRole.update(ProjectRole, {
      where: {
        project_role_id: id
      }
    });
  }
}

module.exports = new ProjectRoleRepository(ProjectRole, Op);
