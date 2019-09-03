const Client = require("../../model/Client");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
class ClientRepository {
  constructor() {
    this.Client = Client;
    this.Op = Op;
  }

  async getClients() {
    return await this.Client.findAll({});
  }

  async getClientsWithPaginator(page) {
    return await this.Client.findAndCountAll({
      offset: (page - 1) * 10,
      limit: 10
    });
  }

  async getClientById(client_id) {
    return await this.Client.findByPk(client_id);
  }

  async getClientsBySearchValue(search_value) {
    return await this.Client.findAll({
      where: {
        [this.Op.or]: [
          {
            cid: {
              [this.Op.like]: "%" + search_value + "%"
            }
          },
          {
            client_name: {
              [this.Op.like]: "%" + search_value + "%"
            }
          },
          {
            client_description: {
              [this.Op.like]: "%" + search_value + "%"
            }
          }
        ]
      }
    });
  }

  async getClientsBySearchValueWithPaginator(search_value, page) {
    console.log(search_value, page);
    return await this.Client.findAndCountAll({
      where: {
        [this.Op.or]: [
          {
            cid: {
              [this.Op.like]: "%" + search_value + "%"
            }
          },
          {
            client_name: {
              [this.Op.like]: "%" + search_value + "%"
            }
          },
          {
            client_description: {
              [this.Op.like]: "%" + search_value + "%"
            }
          }
        ]
      },
      offset: (page - 1) * 10,
      limit: 10
    });
  }

  async CreateClient(cid, name, description) {
    return await this.Client.create({
      cid: cid,
      client_name: name,
      client_description: description
    });
  }

  async UpdateClient(id, client) {
    return await this.Client.update(client, {
      where: {
        client_id: id
      }
    });
  }
}

module.exports = new ClientRepository();
