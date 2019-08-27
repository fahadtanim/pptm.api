const UserServices = require("../services/UserServices");

class UserController {
  //Get All User Roles
  constructor(UserServices) {
    this.UserServices = UserServices;
  }
  async Users(request, response) {
    response.send(UserServices.getUsers());
  }

  //Get User Role By Id
  async UserById(request, response) {
    response.send(await UserServices.getUserById(request.params.id));
  }

  //search User Role By value
  async SearchUser(request, response) {
    response.send(
      await UserServices.getUsersBySearchValue(request.params.value)
    );
  }

  //create User Role
  async CreateUser(request, response) {
    let data = await UserServices.createUser(
      request.body.fullname,
      request.body.username,
      request.body.email,
      request.body.user_role_id,
      request.body.user_type_id
    );
    response.send(data);
  }

  //update User Role
  async UpdateUser(request, response) {
    response.send(
      await UserServices.updateUser(request.params.id, request.body.data)
    );
  }
}

module.exports = new UserController(UserServices);
