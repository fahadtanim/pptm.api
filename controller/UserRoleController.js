const UserRoleServices = require("../services/UserRoleServices");

class UserRoleController {
  //Get All User Roles
  constructor(UserRoleServices){
    this.UserRoleServices = UserRoleServices;
  }
  async UserRoles(request, response) {
    response.send(UserRoleServices.getUserRoles());
  }

  //Get User Role By Id
  async UserRoleById(request, response) {
    response.send(await UserRoleServices.getUserRoleById(request.params.id));
  }

  //search User Role By value
  async SearchUserRole(request, response) {
    response.send(
      await UserRoleServices.getUserRolesBySearchValue(request.params.value)
    );
  }

  //create User Role
  async CreateUserRole(request, response) {
    let data = await UserRoleServices.createUserRole(request.body.role_name);
    response.send(data);
  }

  //update User Role
  async UpdateUserRole(request, response) {
    response.send(await UserRoleServices.updateUserRole(request.params.id, request.body.data));
  }
}

module.exports = new UserRoleController(UserRoleServices);