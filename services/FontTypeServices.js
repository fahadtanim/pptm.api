const FontTypeRepository = require("../data/repository/FontTypeRepository");

class FontTypeServices {
  constructor(FontTypeRepository) {
    this.FontTypeRepository = FontTypeRepository;
  }

  async getFontTypes() {
    return await this.FontTypeRepository.getFontTypes();
  }

  async getFontTypeById(id) {
    return await this.FontTypeRepository.getFontTypeById(id);
  }

  async getFontTypesBySearchValue(search_value) {
    return await this.FontTypeRepository.getFontTypesBySearchValue(
      search_value
    );
  }

  async createFontType(data) {
    return await this.FontTypeRepository.createFontType(data);
  }

  async updateFontType(id, data) {
    return await this.FontTypeRepository.updateFontType(id, data);
  }
}

module.exports = new FontTypeServices(FontTypeRepository);
