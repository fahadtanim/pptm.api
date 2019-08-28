const DataFilePattern = require("../../model/DataFilePattern");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class DataFilePatternRepository {
  constructor(DataFilePattern, Op) {
    this.DataFilePattern = DataFilePattern;
    this.Op = Op;
  }

  async getDataFilePatterns() {
    return await this.DataFilePattern.findAll();
  }

  async getDataFilePatternById(id) {
    return await this.DataFilePattern.findByPk(id);
  }

  async getDataFilePatternsBySearchValue(search_value) {
    return await this.DataFilePattern.findAll({
      where: {
        [this.Op.or]: [
          {
            data_file_pattern_name: {
              [this.Op.like]: "%" + search_value + "%"
            }
          }
        ]
      }
    });
  }

  async createDataFilePattern(data_file_pattern_name) {
    return await this.DataFilePattern.create({
      data_file_pattern_name: data_file_pattern_name
    });
  }

  async updateDataFilePattern(id, user_role) {
    return await this.DataFilePattern.update(user_role, {
      where: {
        data_file_pattern_id: id
      }
    });
  }
}

module.exports = new DataFilePatternRepository(DataFilePattern, Op);
