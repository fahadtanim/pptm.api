const app_config = require("./app_config");

const express = require("express");
const bodyParser = require("body-parser");

//APP CONFIGURATION
const app = express();

const PORT = process.env.PORT || app_config.port;
app.use(bodyParser.json());

//############ ROUTER MODULES #################
//client
const ClientRouter = require("./router/ClientRouter");
//user
const UserRoleRouter = require("./router/UserRoleRouter");
const UserTypeRouter = require("./router/UserTypeRouter");
const UserRouter = require("./router/UserRouter");
//project
const ProjectRouter = require("./router/ProjectRouter");
const ProjectRoleRouter = require("./router/ProjectRoleRouter");
const ProjectPhaseRouter = require("./router/ProjectPhaseRouter");
const DataFilePatternRouter = require("./router/DataFilePatternRouter");
const FontTypeRouter = require("./router/FontTypeRouter");
const ProjectDeadlineRouter = require("./router/ProjectDeadlineRouter");
const ProjectEnrolledUserRouter = require("./router/ProjectEnrolledUserRouter");
const ProjectConversationRouter = require("./router/ProjectConversationRouter");

// console.log(ProjectEnrolledUserRouter);
//############## CLIENT RELATED ROUTE #################
//######  CLIENT ROUTE ############

app.use("/api/v1/clients", ClientRouter);

//############## USER RELATED ROUTE ###################
//######  USER ROLE ROUTE #########
app.use("/api/user_roles", UserRoleRouter);

//######  USER TYPE ROUTE ############

app.use("/api/user_types", UserTypeRouter);

//######  USER ROUTE ############

app.use("/api/users", UserRouter);

//############## PROJECT RELATED ROUTE ###############
//######  PROJECT ROLE ROUTE ############

app.use("/api/project_roles", ProjectRoleRouter);

//######  PROJECT ROLE ROUTE ############

app.use("/api/project_phases", ProjectPhaseRouter);

//######  DATA FILE PATTERN ROUTE ############

app.use("/api/data_file_patterns", DataFilePatternRouter);

//######  FONT TYPE ROUTE ############

app.use("/api/font_types", FontTypeRouter);

//######  PROJECT DEADLINE ROUTE ############

app.use("/api/project_deadlines", ProjectDeadlineRouter);

//######  PROJECT ENROLLED USER ROUTE ############
app.use("/api/v1/project_enrolled_users", ProjectEnrolledUserRouter);
//######  PROJECT CONVERSATION ROUTE ############

app.use("/api/project_conversations", ProjectConversationRouter);

//######  PROJECT ROUTE ############

app.use("/api/v1/projects", ProjectRouter);

//#######################################
//###########  SERVER START  ############
//#######################################

app.listen(PORT, () => {
  console.log("server started!! Port : " + PORT);
  //   console.log(app_config.port);
});

//#######################################
//###########  SERVER END  ##############
//#######################################
