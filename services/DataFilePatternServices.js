const DataFilePatternRepository = require("../data/repository/DataFilePatternRepository");

class DataFilePatternServices {
  constructor(DataFilePatternRepository) {
    this.DataFilePatternRepository = DataFilePatternRepository;
  }

  async getDataFilePatterns() {
    return await this.DataFilePatternRepository.getDataFilePatterns();
  }

  async getDataFilePatternById(id) {
    return await this.DataFilePatternRepository.getDataFilePatternById(id);
  }

  async getDataFilePatternsBySearchValue(search_value) {
    return await this.DataFilePatternRepository.getDataFilePatternsBySearchValue(
      search_value
    );
  }

  async createDataFilePattern(data) {
    return await this.DataFilePatternRepository.createDataFilePattern(data);
  }

  async updateDataFilePattern(id, data) {
    return await this.DataFilePatternRepository.updateDataFilePattern(id, data);
  }
}

module.exports = new DataFilePatternServices(DataFilePatternRepository);
