const ProjectConversation = require("../../model/ProjectConversation");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class ProjectConversationRepository {
  constructor(ProjectConversation, Op) {
    this.ProjectConversation = ProjectConversation;
    this.Op = Op;
  }

  async getProjectConversations() {
    return await this.ProjectConversation.findAll();
  }

  async getProjectConversationById(id) {
    return await this.ProjectConversation.findByPk(id);
  }

  async getProjectConversationByProjectId(project_id) {
    return await this.ProjectConversation.findAll({
      where: {
        project_id: project_id
      }
    });
  }

  async getProjectConversationByProjectCidJid(cid,jid) {
    return await this.ProjectConversation.findAll({
      where: {
        cid: cid,
        jid: jid
      }
    });
  }

  async getProjectConversationsBySearchValue(search_value) {
    return await this.ProjectConversation.findAll({
      where: {
        [this.Op.or]: [
          {
            conversation_text: {
              [this.Op.like]: "%" + search_value + "%"
            }
          },
        ]
      }
    });
  }

  async createProjectConversation(deadline, deadline_name, project_id) {
    return await this.ProjectConversation.create({
      deadline: deadline,
      deadline_name: deadline_name,
      project_id: project_id
    });
  }

  async updateProjectConversation(id, project_deadline) {
    return await this.ProjectConversation.update(project_deadline, {
      where: {
        deadline_id: id
      }
    });
  }
}

module.exports = new ProjectConversationRepository(ProjectConversation, Op);
