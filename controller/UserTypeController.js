const UserTypeServices = require("../services/UserTypeServices");

class UserTypeController {
  //Get All User Roles
  constructor(UserTypeServices) {
    this.UserTypeServices = UserTypeServices;
  }
  async UserTypes(request, response) {
    response.send(UserTypeServices.getUserTypes());
  }

  //Get User Role By Id
  async UserTypeById(request, response) {
    response.send(await UserTypeServices.getUserTypeById(request.params.id));
  }

  //search User Role By value
  async SearchUserType(request, response) {
    response.send(
      await UserTypeServices.getUserTypesBySearchValue(request.params.value)
    );
  }

  //create User Role
  async CreateUserType(request, response) {
    let data = await UserTypeServices.createUserType(
      request.body.type_name,
      request.body.type_label_id
    );
    response.send(data);
  }

  //update User Role
  async UpdateUserType(request, response) {
    response.send(
      await UserTypeServices.updateUserType(
        request.params.id,
        request.body.data
      )
    );
  }
}

module.exports = new UserTypeController(UserTypeServices);
