const Project = require("../../model/Project");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
class ProjectRepository {
  constructor() {
    this.Project = Project;
    this.Op = Op;
  }

  async getProjects() {
    return await this.Project.findAll({
      include: [
        {
          all: true
        }
      ]
    });
  }

  async getProjectsWithPaginator(page) {
    return await this.Project.findAndCountAll({
      include: [
        {
          all: true
        }
      ],
      offset: (page - 1) * 10,
      limit: 10
    });
  }

  async getProjectById(project_id) {
    return await this.Project.findOne({
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

  async getProjectsByCid(cid) {
    return await this.Project.findAll({
      where: {
        cid: cid
      }
    });
  }

  async getProjectByJid(jid) {
    return await this.Project.findAll({
      where: {
        jid: jid
      }
    });
  }

  async getProjectByProjectName(project_name) {
    return await this.Project.findAll({
      where: {
        project_name: project_name
      }
    });
  }

  async filterProject(data) {
    //default setup phase
    data.current_phase_id =
      data.current_phase_id == "" || data.current_phase_id == null
        ? -500
        : data.current_phase_id;

    //default setup font
    data.font_type_id =
      data.font_type_id == "" || data.font_type_id == null
        ? -500
        : data.font_type_id;

    //default setup input file
    data.input_data_file_pattern_id =
      data.input_data_file_pattern_id == "" ||
      data.input_data_file_pattern_id == null
        ? -500
        : data.input_data_file_pattern_id;

    //default setup working file
    data.working_data_file_pattern_id =
      data.working_data_file_pattern_id == "" ||
      data.working_data_file_pattern_id == null
        ? -500
        : data.working_data_file_pattern_id;

    //default setup message manager type
    data.message_manager_type_id =
      data.message_manager_type_id == "" || data.message_manager_type_id == null
        ? -500
        : data.message_manager_type_id;

    //default setup message manager text count max
    data.message_manager_text_count_max =
      data.message_manager_text_count_max == "" ||
      data.message_manager_text_count_max == null
        ? -500
        : data.message_manager_text_count_max;

    //default setup message manager text count min

    data.message_manager_text_count_min =
      data.message_manager_text_count_min == "" ||
      data.message_manager_text_count_min == null
        ? -500
        : data.message_manager_text_count_min;

    //default setup message manager image count max
    data.message_manager_image_count_max =
      data.message_manager_image_count_max == "" ||
      data.message_manager_image_count_max == null
        ? -500
        : data.message_manager_image_count_max;

    //default setup message manager image count min
    data.message_manager_image_count_min =
      data.message_manager_image_count_min == "" ||
      data.message_manager_image_count_min == null
        ? -500
        : data.message_manager_image_count_min;

    //default setup message manager total count min
    data.total_message_manager_content_count_min =
      data.total_message_manager_content_count_min == "" ||
      data.total_message_manager_content_count_min == null
        ? -500
        : data.total_message_manager_content_count_min;

    //default setup message manager text count max
    data.total_message_manager_content_count_max =
      data.total_message_manager_content_count_max == "" ||
      data.total_message_manager_content_count_max == null
        ? -500
        : data.total_message_manager_content_count_max;

    return await this.Project.findAll({
      where: {
        [this.Op.or]: [
          {
            cid: {
              [this.Op.like]: "%" + data.cid + "%"
            }
          },
          {
            jid: {
              [this.Op.like]: "%" + data.jid + "%"
            }
          },
          {
            project_name: {
              [this.Op.like]: "%" + data.project_name + "%"
            }
          },
          {
            project_description: {
              [this.Op.like]: "%" + data.project_description + "%"
            }
          },
          {
            client_pickup: {
              [this.Op.like]: "%" + data.client_pickup + "%"
            }
          },
          {
            redmine_jef: {
              [this.Op.like]: "%" + data.redmine_jef + "%"
            }
          },
          {
            current_phase_id: data.current_phase_id
          },
          {
            font_type_id: data.font_type_id
          },
          {
            input_data_file_pattern_id: data.input_data_file_pattern_id
          },
          {
            working_data_file_pattern_id: data.working_data_file_pattern_id
          },
          {
            has_preprocessed: data.has_preprocessed
          },
          {
            has_transaction: data.has_transaction
          },
          {
            has_message_manager: data.has_message_manager
          },
          {
            message_manager_type_id: data.has_message_manager_type_id
          },
          {
            message_manager_text_count: {
              [this.Op.between]: [
                data.message_manager_text_count_min,
                data.message_manager_text_count_max
              ]
            }
          },
          {
            message_manager_image_count: {
              [this.Op.between]: [
                data.message_manager_image_count_min,
                data.message_manager_image_count_max
              ]
            }
          },
          {
            total_message_manager_content_count: {
              [this.Op.between]: [
                data.total_message_manager_content_count_min,
                data.total_message_manager_content_count_max
              ]
            }
          }
        ]
      }
    });
  }

  //   async getProjectsBySearchValue(search_value) {
  //     return await this.Project.findAll({
  //       where: {
  //         [this.Op.or]: [
  //           {
  //             cid: {
  //               [this.Op.like]: "%" + search_value + "%"
  //             }
  //           },
  //           {
  //             project_name: {
  //               [this.Op.like]: "%" + search_value + "%"
  //             }
  //           },
  //           {
  //             project_description: {
  //               [this.Op.like]: "%" + search_value + "%"
  //             }
  //           }
  //         ]
  //       }
  //     });
  //   }

  async CreateProject(project) {
    return await this.Project.create({
      cid: project.cid,
      jid: project.jid,
      project_name: project.project_name,
      project_description: project.project_description,
      redmine_jef: project.redmine_jef,
      client_pickup: project.client_pickup,
      current_phase_id: project.current_phase_id,
      font_type_id: project.font_type_id,
      input_data_file_pattern_id: project.input_data_file_pattern_id,
      working_data_file_pattern_id: project.working_data_file_pattern_id,
      has_preprocessed: project.has_preprocessed,
      has_checklist: project.has_checklist,
      has_checkimage: project.has_checkimage,
      has_transaction: project.has_transaction,
      has_message_manager: project.has_message_manager,
      message_manager_type_id: project.message_manager_type_id,
      message_manager_text_count: project.message_manager_text_count,
      message_manager_image_count: project.message_manager_image_count,
      total_message_manager_content_count:
        project.total_message_manager_content_count
    });
  }

  async UpdateProject(id, project) {
    return await this.Project.update(project, {
      where: {
        project_id: id
      }
    });
  }
}

module.exports = new ProjectRepository();
