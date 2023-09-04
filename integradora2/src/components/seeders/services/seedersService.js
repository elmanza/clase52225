// Services
const careInstructionServices = require("../../careInstruction/services/careInstructionService");
const categoryServices = require("../../category/services/categoryService");
const countryServices = require("../../country/services/countryService");
const colorServices = require("../../colors/services/colorsService");


const HandlerDocument = require("../../../utils/handlerDocument");
const path = require("path");
class Seeder {
  async init() {
    try {
      const folder_init = path.resolve(__dirname, "../data", "init");
      const careJson = await HandlerDocument.getFile(path.resolve(folder_init, "care_instructions.json"));
      const categoryJson = await HandlerDocument.getFile(path.resolve(folder_init, "categories.json"));
      const countryJson = await HandlerDocument.getFile(path.resolve(folder_init, "countries.json"));
      const colorJson = await HandlerDocument.getFile(path.resolve(folder_init, "colors.json"));
      const [cares, categories, countries, colors] = await Promise.all([
        await careInstructionServices.create(careJson),
        await categoryServices.create(categoryJson),
        await countryServices.create(countryJson),
        await colorServices.create(colorJson)
      ]);
      return {
        cares: cares.length,
        categories: categories.length,
        countries: countries.length,
        colors: colors.length
      };
    } catch (error) {
      return { response: "Hubo un error!" };
    }
  }

  async downInit() {
    try {
      const result = await Promise.all([
        await careInstructionServices.delete(),
        await categoryServices.delete(),
        await countryServices.delete(),
        await colorServices.delete()
      ]);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async insertProducts() {
    try {
      // return await roleModel.create(payload);
      return [];
    } catch (error) {
      console.log(error);
    }
  }

  async downProducts() {
    try {
      // return await roleModel.create(payload);
      return [];
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new Seeder();