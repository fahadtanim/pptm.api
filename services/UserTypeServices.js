const UserTypeRepository = require("../data/repository/UserTypeRepository");

class UserTypeServices {
  constructor(UserTypeRepository) {
    this.UserTypeRepository = UserTypeRepository;
  }

  async getUserTypes() {
    return await this.UserTypeRepository.getUserTypes();
  }

  async getUserTypeById(id) {
    return await this.UserTypeRepository.getUserTypeById(id);
  }

  async getUserTypesBySearchValue(search_value) {
    return await this.UserTypeRepository.getUserTypesBySearchValue(
      search_value
    );
  }

  async createUserType(name, color) {
    return await this.UserTypeRepository.createUserType(name, color);
  }
  async updateUserType(id, data) {
    return await this.UserTypeRepository.updateUserType(id, data);
  }
}

module.exports = new UserTypeServices(UserTypeRepository);
