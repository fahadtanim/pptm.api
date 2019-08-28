const FontType = require("../../model/FontType");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class FontTypeRepository {
  constructor(FontType, Op) {
    this.FontType = FontType;
    this.Op = Op;
  }

  async getFontTypes() {
    return await this.FontType.findAll();
  }

  async getFontTypeById(id) {
    return await this.FontType.findByPk(id);
  }

  async getFontTypesBySearchValue(search_value) {
    return await this.FontType.findAll({
      where: {
        [this.Op.or]: [
          {
            font_type_name: {
              [this.Op.like]: "%" + search_value + "%"
            }
          }
        ]
      }
    });
  }

  async createFontType(font_type_name) {
    return await this.FontType.create({
      font_type_name: font_type_name
    });
  }

  async updateFontType(id, user_role) {
    return await this.FontType.update(user_role, {
      where: {
        font_type_id: id
      }
    });
  }
}

module.exports = new FontTypeRepository(FontType, Op);
