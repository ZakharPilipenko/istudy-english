import { $authHost, $host } from ".";

export const createTheme = async (theme) => {
  const { data } = await $authHost.post("api/theme", theme);
  return data;
};

export const fetchThemes = async () => {
  const { data } = await $host.get("api/theme");
  return data;
};

export const createLevel = async (level) => {
  const { data } = await $authHost.post("api/level", level);
  return data;
};

export const fetchLevels = async () => {
  const { data } = await $host.get("api/level");
  return data;
};

export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const createCard = async (card) => {
  const { data } = await $authHost.post("api/card", card);
  return data;
};

export const fetchCards = async () => {
  const { data } = await $host.get("api/card");
  return data;
};

export const fetchOneCard = async (id) => {
  const { data } = await $host.get("api/card/" + id);
  return data;
};
