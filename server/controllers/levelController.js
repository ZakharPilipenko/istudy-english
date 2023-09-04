const { Level } = require("../models/models");
const ApiError = require("../error/ApiError");

class LevelController {
  async create(req, res) {
    const { name } = req.body;
    const level = await Level.create({ name });
    return res.json(level);
  }

  async getAll(req, res) {
    const levels = await Level.findAll();
    return res.json(levels);
  }
}

module.exports = new LevelController();
