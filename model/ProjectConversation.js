const Sequelize = require("sequelize");
// const Model = Sequelize.Model;
const sequelize = require("../data/connection");

const ProjectConversation = sequelize.define(
  "project_conversation",
  {
    // attributes
    conversation_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sender_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    reciever_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    project_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    cid: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    jid: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    conversation_text: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    time: {
      type: Sequelize.DATE,
      allowNull: false
    }
  },
  {}
);

module.exports = ProjectConversation;
