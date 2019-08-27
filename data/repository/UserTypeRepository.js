const UserType = require("../../model/UserType");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class UserTypeRepository {
  constructor(UserType, Op) {
    this.UserType = UserType;
    this.Op = Op;
  }

  async getUserTypes() {
    return await this.UserType.findAll();
  }

  async getUserTypeById(id) {
    return await this.UserType.findByPk(id);
  }

  async getUserTypesBySearchValue(search_value) {
    return await this.UserType.findAll({
      where: {
        [this.Op.or]: [
          {
            type_name: {
              [this.Op.like]: "%" + search_value + "%"
            }
          }
        ]
      }
    });
  }

  async createUserType(type_name, type_label_id) {
    return await this.UserType.create({
      type_name: type_name,
      type_label_id: type_label_id
    });
  }

  async updateUserType(id, user_type) {
    return await this.UserType.update(user_type, {
      where: {
        type_id: id
      }
    });
  }
}

module.exports = new UserTypeRepository(UserType, Op);
