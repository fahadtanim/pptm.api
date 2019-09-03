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

  async getProjectConversationsByProjectId(project_id) {
    return await this.ProjectConversation.findAll({
      where: {
        project_id: project_id
      }
    });
  }
  async getProjectConversationsBySenderId(sender_id) {
    return await this.ProjectConversation.findAll({
      where: {
        sender_id: sender_id
      }
    });
  }
  async getProjectConversationsByRecieverId(reciever_id) {
    return await this.ProjectConversation.findAll({
      where: {
        reciever_id: reciever_id
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
          }
        ]
      }
    });
  }

  async createProjectConversation(Conversation) {
    return await this.ProjectConversation.create({
      conversation_text: Conversation.conversation_text,
      project_id: Conversation.project_id,
      sender_id: Conversation.sender_id,
      reciever_id: Conversation.reciever_id,
      time: Conversation.time
    });
  }

  async updateProjectConversation(id, project_deadline) {
    return await this.ProjectConversation.update(project_deadline, {
      where: {
        conversation_id: id
      }
    });
  }
}

module.exports = new ProjectConversationRepository(ProjectConversation, Op);
