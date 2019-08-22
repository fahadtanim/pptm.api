const UserRepository = require("../data/repository/UserRepository");

class UserServices {
  constructor(UserRepository) {
    this.UserRepository = UserRepository;
  }

  async createUser(fullname, username, email, user_role_id, user_type_id) {
    let password = "12345";
    return await this.UserRepository.createUser(
      fullname,
      username,
      email,
      password,
      user_role_id,
      user_type_id
    );
  }

  async getUsers() {
    return await this.UserRepository.getUsers();
  }

  async getUserById(id) {
    return await this.UserRepository.getUserById(id);
  }

  async getUsersBySearchValue(search_value) {
    return await this.UserRepository.getUsersBySearchValue(search_value);
  }

  async updateUser(id, data) {
    return await this.UserRepository.updateUser(id, data);
  }
}

module.exports = new UserServices(UserRepository);
