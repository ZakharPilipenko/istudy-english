const { Theme } = require("../models/models");
const ApiError = require("../error/ApiError");

class ThemeController {
  async create(req, res) {
    const { name } = req.body;
    const theme = await Theme.create({ name });
    return res.json(theme);
  }

  async getAll(req, res) {
    const themes = await Theme.findAll();
    return res.json(themes);
  }
}

module.exports = new ThemeController();
