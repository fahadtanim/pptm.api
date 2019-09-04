const Sequelize = require("sequelize");
// const Model = Sequelize.Model;
const sequelize = require("../data/connection");
// class project extends Model {}
const ProjectPhase = require("./ProjectPhase");
const FontType = require("./FontType");
const DataFilePattern = require("./DataFilePattern");
const MessageManagerType = require("./MessageManagerType");

const Project = sequelize.define(
  "project",
  {
    // attributes
    project_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cid: {
      type: Sequelize.STRING(100),
      allowNull: false
      // allowNull defaults to true
    },
    jid: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    project_name: {
      type: Sequelize.STRING(200),
      allowNull: false
      // allowNull defaults to true
    },
    project_description: {
      type: Sequelize.TEXT,
      allowNull: true
      // allowNull defaults to true
    },
    client_pickup: {
      type: Sequelize.STRING(200),
      allowNull: true
      // allowNull defaults to true
    },
    redmine_jef: {
      type: Sequelize.STRING(200),
      allowNull: true
      // allowNull defaults to true
    },
    current_phase_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    font_type_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },

    input_data_file_pattern_id: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    working_data_file_pattern_id: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    has_preprocessed: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    has_checklist: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    has_checkimage: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    has_transaction: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    has_message_manager: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    message_manager_type_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    message_manager_text_count: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    message_manager_image_count: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },

    total_message_manager_content_count: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    }
  },
  {}
);

Project.belongsTo(ProjectPhase, {
  foreignKey: "current_phase_id",
  targetKey: "phase_id",
  as: "current_phase"
});
Project.belongsTo(FontType, {
  foreignKey: "font_type_id",
  targetKey: "font_type_id",
  as: "font_type"
});
Project.belongsTo(DataFilePattern, {
  targetKey: "data_file_pattern_id",
  foreignKey: "input_data_file_pattern_id",
  as: "input_file_pattern"
});

Project.belongsTo(DataFilePattern, {
  targetKey: "data_file_pattern_id",
  foreignKey: "working_data_file_pattern_id",
  as: "working_file_pattern"
});

Project.belongsTo(MessageManagerType, {
  targetKey: "type_id",
  foreignKey: "message_manager_type_id",
  as: "message_manager_type"
});

module.exports = Project;
