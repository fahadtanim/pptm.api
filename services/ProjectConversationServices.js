const ProjectConversationRepository = require("../data/repository/ProjectConversationRepository");
const ProjectRepository = require("../data/repository/ProjectRepository");
class ProjectConversationServices {
  constructor() {
    this.ProjectConversationRepository = ProjectConversationRepository;
    this.ProjectRepository = ProjectRepository;
  }

  async getProjectConversations() {
    return await this.ProjectConversationRepository.getProjectConversations();
  }

  async getProjectConversationById(conversation_id) {
    return await this.ProjectConversationRepository.getProjectConversationById(
      conversation_id
    );
  }

  async getProjectConversationByProjectId(project_id) {
    return await this.ProjectConversationRepository.getProjectConversationByProjectId(
      project_id
    );
  }

  async getProjectConversationsByProjectName(project_name) {
    const data = await this.ProjectRepository.getProjectByProjectName(
      project_name
    );
    return await this.ProjectConversationRepository.getProjectConversationsByProjectId(
      data.project_id
    );
  }
  async getProjectConversationsBySearchValue(search_value) {
    return await this.ProjectConversationRepository.getProjectConversationsBySearchValue(
      search_value
    );
  }

  async CreateProjectConversation(data) {
    let conversation = {
      conversation_text: data.conversation_text,
      project_id: data.project_id,
      sender_id: data.sender_id,
      reciever_id: data.reciever_id,
      time: data.time
    };
    let data = await this.ProjectConversationRepository.CreateProjectConversation(
      conversation
    );
    return data;
  }

  async CreateProjectConversationByProjectName(data) {
    const project = await this.ProjectRepository.getProjectByProjectName(
      data.project_name
    );
    let conversation = {
      conversation_text: data.conversation_text,
      project_id: project.project_id,
      sender_id: data.sender_id,
      reciever_id: data.reciever_id,
      time: data.time
    };
    let data = await this.ProjectConversationRepository.CreateProjectConversation(
      conversation
    );
    return data;
  }

  async UpdateProjectConversation(id, ProjectConversation) {
    let data = await this.ProjectConversationRepository.UpdateProjectConversation(
      id,
      ProjectConversation
    );
    return data;
  }
}

module.exports = new ProjectConversationServices();
