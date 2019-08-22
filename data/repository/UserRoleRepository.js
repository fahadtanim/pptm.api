const UserRole = require("../../model/UserRole");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class UserRoleRepository {
  constructor(UserRole, Op) {
    this.UserRole = UserRole;
    this.Op = Op;
  }

  async getUserRoles() {
    return await this.UserRole.findAll();
  }

  async getUserRoleById(id) {
    return await this.UserRole.findByPk(id);
  }

  async getUserRolesBySearchValue(search_value) {
    return await this.UserRole.findAll({
      where: {
        [this.Op.or]: [
          {
            role_name: {
              [this.Op.like]: "%" + search_value + "%"
            }
          }
        ]
      }
    });
  }

  async createUserRole(role_name) {
    return await this.UserRole.create({
      role_name: role_name
    });
  }

  async updateUserRole(id, user_role) {
    return await this.UserRole.update(user_role, {
      where: {
        role_id: id
      }
    });
  }
}

module.exports = new UserRoleRepository(UserRole, Op);
