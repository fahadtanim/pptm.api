const FontTypeServices = require("../services/FontTypeServices");

class FontTypeController {
  //Get All User Roles
  constructor(FontTypeServices) {
    this.FontTypeServices = FontTypeServices;
  }
  async FontTypes(request, response) {
    response.send(FontTypeServices.getFontTypes());
  }

  //Get User Role By Id
  async FontTypeById(request, response) {
    response.send(await FontTypeServices.getFontTypeById(request.params.id));
  }

  //search User Role By value
  async SearchFontType(request, response) {
    response.send(
      await FontTypeServices.getFontTypesBySearchValue(request.params.value)
    );
  }

  //create User Role
  async CreateFontType(request, response) {
    let data = await FontTypeServices.createFontType(
      request.body.font_type_name
    );
    response.send(data);
  }

  //update User Role
  async UpdateFontType(request, response) {
    response.send(
      await FontTypeServices.updateFontType(
        request.params.id,
        request.body.data
      )
    );
  }
}

module.exports = new FontTypeController(FontTypeServices);
