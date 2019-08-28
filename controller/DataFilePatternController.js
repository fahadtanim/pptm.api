const DataFilePatternServices = require("../services/DataFilePatternServices");

class DataFilePatternController {
  //Get All User Roles
  constructor(DataFilePatternServices) {
    this.DataFilePatternServices = DataFilePatternServices;
  }
  async DataFilePatterns(request, response) {
    response.send(DataFilePatternServices.getDataFilePatterns());
  }

  //Get User Role By Id
  async DataFilePatternById(request, response) {
    response.send(
      await DataFilePatternServices.getDataFilePatternById(request.params.id)
    );
  }

  //search User Role By value
  async SearchDataFilePattern(request, response) {
    response.send(
      await DataFilePatternServices.getDataFilePatternsBySearchValue(
        request.params.value
      )
    );
  }

  //create User Role
  async CreateDataFilePattern(request, response) {
    let data = await DataFilePatternServices.createDataFilePattern(
      request.body.data_file_pattern_name
    );
    response.send(data);
  }

  //update User Role
  async UpdateDataFilePattern(request, response) {
    response.send(
      await DataFilePatternServices.updateDataFilePattern(
        request.params.id,
        request.body.data
      )
    );
  }
}

module.exports = new DataFilePatternController(DataFilePatternServices);
