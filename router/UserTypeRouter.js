var express = require("express");
var router = express.Router();
var UserTypeController = require("../controller/UserTypeController");
//Get All User Roles
//Get All User Types
router.get("/", async (request, response) => {
  await UserTypeController.UserTypes(request, response);
});

//Get User Type By Id
router.get("/:id", async (request, response) => {
  await UserTypeController.UserTypeById(request, response);
});

//search User Type By value
router.get("/:value", async (request, response) => {
  await UserTypeController.SearchUserType(request, response);
});

//create User Role
router.post("/", async (request, response) => {
  await UserTypeController.CreateUserType(request, response);
});

//update User Type
router.put("/:id", async (request, response) => {
  await UserTypeController.UpdateUserType(request, response);
});

module.exports = router;
