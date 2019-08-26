var express = require("express");
var router = express.Router();
var UserRoleController = require("../controller/UserRoleController");
//Get All User Roles
router.get("/", async (request, response) => {
  await UserRoleController.UserRoles(request,response);
});

//Get User Role By Id
router.get("/:id", async (request, response) => {
  await UserRoleController.UserRoleById(request, response);
});

//search User Role By value
router.get("/search/:value", async (request, response) => {
  await UserRoleController.SearchUserRole(request, response);
});

//create User Role
router.post("/", async (request, response) => {
  await UserRoleController.CreateUserRole(request, response);
});

//update User Role
router.put("/:id", async (request, response) => {
  await UserRoleController.UpdateUserRole(request, response);
});

module.exports = router;
