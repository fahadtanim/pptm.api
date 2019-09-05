const ProjectEnrolledUser = require("../../model/ProjectEnrolledUser");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class ProjectEnrolledUserRepository {
  constructor(ProjectEnrolledUser, Op) {
    this.ProjectEnrolledUser = ProjectEnrolledUser;
    this.Op = Op;
  }

  async getProjectEnrolledUsers() {
    console.log("came repo");
    return await this.ProjectEnrolledUser.findAll({
      include: [
        {
          all: true
        }
      ]
    });
  }

  async getProjectEnrolledUserByProjectId(project_id) {
    return await this.ProjectEnrolledUser.findAll({
      include: [
        {
          all: true
        }
      ],
      where: {
        project_id: project_id
      }
    });
  }

  async getProjectEnrolledUserByProjectName(project_name) {
    return await this.ProjectEnrolledUser.findAll({
      where: {
        project_name: project_name
      }
    });
  }

  async getProjectEnrolledUserByUserId(user_id) {
    return await this.ProjectEnrolledUser.findAll({
      where: {
        user_id: user_id
      }
    });
  }

  async getProjectEnrolledUsersBySearchValue(search_value) {
    return await this.ProjectEnrolledUser.findAll({
      where: {
        [this.Op.or]: [
          {
            project_name: {
              [this.Op.like]: "%" + search_value + "%"
            }
          }
        ]
      }
    });
  }

  async createProjectEnrolledUser(
    project_id,
    project_name,
    user_id,
    project_role_id
  ) {
    return await this.ProjectEnrolledUser.create({
      project_id: project_id,
      project_name: project_name,
      user_id: user_id,
      project_role_id: project_role_id
    });
  }

  async updateProjectEnrolledUser(project_id, user_id, project_enrolled_user) {
    return await this.ProjectEnrolledUser.update(project_enrolled_user, {
      where: {
        project_id: project_id,
        user_id: user_id
      }
    });
  }
}

module.exports = new ProjectEnrolledUserRepository(ProjectEnrolledUser, Op);
