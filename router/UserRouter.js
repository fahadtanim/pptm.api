const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");
//Get All User
router.get("/", async (request, response) => {
  await UserController.Users(request, response);
});

//Get User By Id
router.get("/:id", async (request, response) => {
  await UserController.UserById(request, response);
});

//search User By value
router.get("/search/:value", async (request, response) => {
  await UserController.SearchUser(request, response);
});

//create User Role
router.post("/", async (request, response) => {
  await UserController.CreateUser(request, response);
});

//update User
router.put("/:id", async (request, response) => {
  await UserController.UpdateUser(request, response);
});

module.exports = router;
