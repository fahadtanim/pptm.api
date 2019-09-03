const ClientServices = require("../services/clientServices");

class ClientController {
  async Clients(request, response) {
    response.send(await ClientServices.getClients());
  }

  async ClientsWithPaginator(request, response) {
    response.send(
      await ClientServices.getClientsWithPaginator(request.params.page)
    );
  }

  async ClientId(request, response) {
    response.send(await ClientServices.getClientById(request.params.id));
  }

  async SearchClient(request, response) {
    response.send(
      await ClientServices.getClientsBySearchValue(request.params.value)
    );
  }

  async SearchClientWithPaginator(request, response) {
    response.send(
      await ClientServices.getClientsBySearchValueWithPaginator(
        request.params.value,
        request.params.page
      )
    );
  }
  async CreateClient(request, response) {
    response.send(
      await ClientServices.CreateClient(
        request.body.cid,
        request.body.client_name,
        request.body.client_description
      )
    );
  }
  async UpdateClient(request, response) {
    response.send(
      await ClientServices.UpdateClient(request.params.id, request.body.data)
    );
  }
}

module.exports = new ClientController();
