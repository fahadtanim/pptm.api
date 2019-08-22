const ClientRepository = require("../data/repository/ClientRepository");

class ClientServices {
  constructor() {
    this.ClientRepository = ClientRepository;
  }

  async getClients() {
    let data = await this.ClientRepository.getClients();
    return data;
  }

  async getClientById(client_id) {
    let data = await this.ClientRepository.getClientById(client_id);
    return data;
  }

  async getClientsBySearchValue(search_value) {
    let data = await this.ClientRepository.getClientsBySearchValue(
      search_value
    );
    return data;
  }

  async CreateClient(cid, name, description) {
    let data = await this.ClientRepository.CreateClient(cid, name, description);
    return data;
  }
  async UpdateClient(id, client) {
    let data = await this.ClientRepository.UpdateClient(id, client);
    return data;
  }
}

module.exports = new ClientServices();
