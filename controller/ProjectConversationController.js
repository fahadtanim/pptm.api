const ProjectConversationServices = require("../services/ProjectConversationServices");

class ProjectConversationController {
  async ProjectConversations(request, response) {
    response.send(await ProjectConversationServices.getProjectConversations());
  }

  async ProjectConversationId(request, response) {
    response.send(
      await ProjectConversationServices.getProjectConversationById(
        request.params.id
      )
    );
  }

  async ProjectConversationProjectId(request, response) {
    response.send(
      await ProjectConversationServices.getProjectConversationByProjectId(
        request.params.project_id
      )
    );
  }

  async ProjectConversationProjectName(request, response) {
    response.send(
      await ProjectConversationServices.getProjectConversationByProjectName(
        request.params.project_name
      )
    );
  }

  async SearchProjectConversation(request, response) {
    response.send(
      await ProjectConversationServices.getProjectConversationsBySearchValue(
        request.params.value
      )
    );
  }
  async CreateProjectConversation(request, response) {
    response.send(
      await ProjectConversationServices.CreateProjectConversation({
        conversation_text: request.body.conversation_text,
        project_id: request.body.project_id,
        sender_id: request.body.sender_id,
        reciever_id: request.body.reciever_id,
        time: request.body.time
      })
    );
  }

  async CreateProjectConversationByProjectName(request, response) {
    response.send(
      await ProjectConversationServices.CreateProjectConversationByProjectName({
        conversation_text: request.body.conversation_text,
        project_name: request.body.project_name,
        sender_id: request.body.sender_id,
        reciever_id: request.body.reciever_id,
        time: request.body.time
      })
    );
  }
  async UpdateProjectConversation(request, response) {
    response.send(
      await ProjectConversationServices.UpdateProjectConversation(
        request.params.id,
        request.body.data
      )
    );
  }
}

module.exports = new ProjectConversationController();
