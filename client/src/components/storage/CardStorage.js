import { makeAutoObservable } from "mobx";

export default class CardStorage {
  constructor() {
    this._types = [];
    this._levels = [];
    this._themes = [];
    this._cards = [];
    this._selectedLevel = {};
    this._selectedType = {};
    this._selectedTheme = {};
    this._selectedCard = {};
    makeAutoObservable(this);
  }

  setCards(cards) {
    this._cards = cards;
  }

  setTypes(types) {
    this._types = types;
  }

  setLevels(levels) {
    this._levels = levels;
  }

  setThemes(themes) {
    this._themes = themes;
  }

  setSelectedLevel(level) {
    this._selectedLevel = level;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedTheme(theme) {
    this._selectedTheme = theme;
  }

  setSelectedCard(card) {
    this._selectedCard = card;
  }

  get cards() {
    return this._cards;
  }

  get types() {
    return this._types;
  }

  get levels() {
    return this._levels;
  }

  get themes() {
    return this._themes;
  }

  get selectedLevel() {
    return this._selectedLevel;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedTheme() {
    return this._selectedTheme;
  }

  get selectedCard() {
    return this._selectedCard;
  }
}
