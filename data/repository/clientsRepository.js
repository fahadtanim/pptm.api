const Client = require("../../model/client");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
class ClientRepository {
  constructor() {
    this.Client = Client;
    this.Op = Op;
  }

  async getClients() {
    return await this.Client.findAll();
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
