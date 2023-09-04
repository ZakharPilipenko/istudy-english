const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Card = sequelize.define("card", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  token: { type: DataTypes.STRING, allowNull: false },
  cardType: { type: DataTypes.INTEGER, allowNull: false },
  audio: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
});

const Level = sequelize.define("level", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Theme = sequelize.define("theme", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const LevelTheme = sequelize.define("level_theme", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasMany(Level);
Level.belongsTo(User);

Level.hasMany(Card);
Card.belongsTo(Level);

Theme.hasMany(Card);
Card.belongsTo(Theme);

Card.hasMany(Type);
Type.belongsTo(Card);

Level.belongsToMany(Theme, { through: LevelTheme });
Theme.belongsToMany(Level, { through: LevelTheme });

module.exports = {
  User,
  Level,
  Card,
  Theme,
  Type,
  LevelTheme,
};
