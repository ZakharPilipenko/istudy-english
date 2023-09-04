const uuid = require("uuid");
const path = require("path");
const { Card } = require("../models/models");
const ApiError = require("../error/ApiError");

class CardController {
  async create(req, res, next) {
    try {
      let { token, cardType, levelId, themeId } = req.body;
      const { audio, image } = req.files;
      const audioExtension = path.extname(audio.name);
      const audioFileName = uuid.v4() + audioExtension;
      const audioFilePath = path.resolve(
        __dirname,
        "..",
        "static",
        audioFileName
      );
      audio.mv(audioFilePath);

      const imageExtension = path.extname(image.name);
      const imageFileName = uuid.v4() + imageExtension;
      const imageFilePath = path.resolve(
        __dirname,
        "..",
        "static",
        imageFileName
      );
      image.mv(imageFilePath);

      const card = await Card.create({
        token,
        cardType,
        levelId,
        themeId,
        audio: audioFileName,
        image: imageFileName,
      });

      return res.json(card);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { levelId, typeId, themeId } = req.query;
    let cards;
    if (!levelId && !typeId && !themeId) {
      cards = await Card.findAndCountAll();
    }
    if (levelId && !typeId && !themeId) {
      cards = await Card.findAndCountAll({
        where: { levelId },
      });
    }
    if (!levelId && typeId && !themeId) {
      cards = await Card.findAndCountAll({
        where: { typeId },
      });
    }
    if (!levelId && !typeId && themeId) {
      cards = await Card.findAndCountAll({
        where: { themeId },
      });
    }
    if (levelId && typeId && !themeId) {
      cards = await Card.findAndCountAll({
        where: { typeId, levelId },
      });
    }
    if (levelId && typeId && themeId) {
      cards = await Card.findAndCountAll({
        where: { typeId, levelId, themeId },
      });
    }
    return res.json(cards);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const card = await Card.findOne({
      where: { id },
    });
    return res.json(card);
  }
}

module.exports = new CardController();
