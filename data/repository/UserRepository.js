const User = require("../../model/User");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class UserRepository {
  constructor(User, Op) {
    this.User = User;
    this.Op = Op;
  }

  async createUser(
    fullname,
    username,
    email,
    password,
    user_role_id,
    user_type_id
  ) {
    return await this.User.create({
      fullname: fullname,
      username: username,
      email: email,
      password: password,
      user_role_id: user_role_id,
      user_type_id: user_type_id
    });
  }

  async getUsers() {
    return await this.User.findAll({
      include: [
        {
          all: true
        }
      ]
    });
  }

  async getUserById(id) {
    return await this.User.findByPk(id, {
      include: [
        {
          all: true
        }
      ]
    });
  }

  async getUserByEmailOrUsername(data) {
    return await this.User.findAll(
      {
        where: {
          [this.Op.or]: [
            {
              username: search_value
            },
            {
              email: search_value
            }
          ]
        }
      },
      {
        include: [
          {
            all: true
          }
        ]
      }
    );
  }

  async getUsersBySearchValue(search_value) {
    return await this.User.findAll(
      {
        where: {
          [this.Op.or]: [
            {
              fullname: {
                [this.Op.like]: "%" + search_value + "%"
              }
            },
            {
              username: {
                [this.Op.like]: "%" + search_value + "%"
              }
            },
            {
              email: {
                [this.Op.like]: "%" + search_value + "%"
              }
            },
            {
              user_role_id: {
                [this.Op.like]: "%" + search_value + "%"
              }
            },
            {
              user_type_id: {
                [this.Op.like]: "%" + search_value + "%"
              }
            }
          ]
        }
      },
      {
        include: [
          {
            all: true
          }
        ]
      }
    );
  }

  async updateUser(id, user) {
    return await this.User.update(user, {
      where: {
        user_id: id
      }
    });
  }
}

module.exports = new UserRepository(User, Op);
