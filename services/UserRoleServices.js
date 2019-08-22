const UserRoleRepository = require("../data/repository/UserRoleRepository");

class UserRoleServices {
  constructor(UserRoleRepository) {
    this.UserRoleRepository = UserRoleRepository;
  }

  async getUserRoles() {
    return await this.UserRoleRepository.getUserRoles();
  }

  async getUserRoleById(id) {
    return await this.UserRoleRepository.getUserRoleById(id);
  }

  async getUserRolesBySearchValue(search_value) {
    return await this.UserRoleRepository.getUserRolesBySearchValue(
      search_value
    );
  }

  async createUserRole(data) {
    return await this.createUserRole(data);
  }

  async updateUserRole(id, data) {
    return await this.UserRoleRepository.updateUserRole(id, data);
  }
}

module.exports = new UserRoleServices(UserRoleRepository);
