import { RANDOMIZED } from "./settings";

export const cats = [
  {
    id: "1",
    token: "carry",
    audio: "/assets/audio/carry.mp3",
    url: "/assets/img/word-carry.jpg",
    type: "word",
  },
  {
    id: "2",
    token: "carry",
    audio: "/assets/audio/carry.mp3",
    url: "/assets/img/carry.jpg",
    type: "image",
  },
  {
    id: "3",
    token: "read",
    audio: "/assets/audio/read.mp3",
    url: "/assets/img/word-read.jpg",
    type: "word",
  },
  {
    id: "4",
    token: "read",
    audio: "/assets/audio/read.mp3",
    url: "/assets/img/read.jpg",
    type: "image",
  },
  {
    id: "5",
    token: "run",
    audio: "/assets/audio/run.mp3",
    url: "/assets/img/word-run.jpg",
    type: "word",
  },
  {
    id: "6",
    token: "run",
    audio: "/assets/audio/run.mp3",
    url: "/assets/img/run.jpg",
    type: "image",
  },
  {
    id: "7",
    token: "say",
    audio: "/assets/audio/say.mp3",
    url: "/assets/img/word-say.jpg",
    type: "word",
  },
  {
    id: "8",
    token: "say",
    audio: "/assets/audio/say.mp3",
    url: "/assets/img/say.jpg",
    type: "image",
  },
  {
    id: "9",
    token: "sleep",
    audio: "/assets/audio/sleep.mp3",
    url: "/assets/img/word-sleep.jpg",
    type: "word",
  },
  {
    id: "10",
    token: "sleep",
    audio: "/assets/audio/sleep.mp3",
    url: "/assets/img/sleep.jpg",
    type: "image",
  },
  {
    id: "11",
    token: "write",
    audio: "/assets/audio/write.mp3",
    url: "/assets/img/word-write.jpg",
    type: "word",
  },
  {
    id: "12",
    token: "write",
    audio: "/assets/audio/write.mp3",
    url: "/assets/img/write.jpg",
    type: "image",
  },
];

// export const cats = [
//   {
//     id: "YdAqiUkUoWA",
//     url: "img/carry.jpg",
//     audio: "audio/carry.mp3",
//     description: "носить на руках",
//   },
//   {
//     id: "hX_hf2lPpUU",
//     url: "img/read.jpg",
//     audio: "audio/read.mp3",
//     description: "читать",
//   },
//   {
//     id: "w1JE5duY62M",
//     url: "img/run.jpg",
//     audio: "audio/run.mp3",
//     description: "бежать",
//   },
//   {
//     id: "3tYZjGSBwbk",
//     url: "img/say.jpg",
//     audio: "audio/say.mp3",
//     description: "сказать",
//   },
//   {
//     id: "NoXUQ54pDac",
//     url: "img/sleep.jpg",
//     audio: "audio/sleep.mp3",
//     description: "спать",
//   },
//   {
//     id: "OZhYgZh0bAg",
//     url: "img/write.jpg",
//     audio: "audio/write.mp3",
//     description: "писать",
//   },
// ];

export const cars = [
  {
    id: "YdAqiUkUoWA",
    url: "img/cars-1.jpg",
    description: "",
  },
  {
    id: "hX_hf2lPpUU",
    url: "img/cars-2.jpg",
    description: "",
  },
  {
    id: "w1JE5duY62M",
    url: "img/cars-3.jpg",
    description: "",
  },
  {
    id: "3tYZjGSBwbk",
    url: "img/cars-4.jpg",
    description: "",
  },
  {
    id: "NoXUQ54pDac",
    url: "img/cars-5.jpg",
    description: "",
  },
  {
    id: "OZhYgZh0bAg",
    url: "img/cars-6.jpg",
    description: "",
  },
];

export const flowers = [
  {
    id: "YdAqiUkUoWA",
    url: "img/flowers-1.jpg",
    description: "",
  },
  {
    id: "hX_hf2lPpUU",
    url: "img/flowers-2.jpg",
    description: "",
  },
  {
    id: "w1JE5duY62M",
    url: "img/flowers-3.jpg",
    description: "",
  },
  {
    id: "3tYZjGSBwbk",
    url: "img/flowers-4.jpg",
    description: "",
  },
  {
    id: "NoXUQ54pDac",
    url: "img/flowers-5.jpg",
    description: "",
  },
  {
    id: "OZhYgZh0bAg",
    url: "img/flowers-6.jpg",
    description: "",
  },
];

// отдельные наборы карточек собраны в коллекцию
// каждый набор сохранен в одноименном поле коллекции
// это позволит нам получить каждый набор по его имени
export const imageCollection = {
  flowers,
  cats,
  cars,
};

export const results = [
  { name: "Аня", stepsCount: 16 },
  { name: "Вася", stepsCount: 12 },
  { name: "Петя", stepsCount: 19 },
];

// функция для доступа к данным из приложения
// принимает в параметре название набора данных
export const getImages = (type) => {
  // создадим парные карточки
  // получаем из коллекции набор данных по его названию
  // используем синтаксис с квадратными скобками для доступа к полю из переменной
  const imagePairs = imageCollection[type].map((item) => ({
    // для каждого объекта создаем его копию оператором spread
    // и перезаписываем идентификатор, добавляя произвольное значение
    ...item,
    id: `${item.id}-1`,
  }));
  // объединим набор с парными карточками
  // создаем новый массив копируя два массива оператором spread
  const mergedImages = [...imagePairs];
  // в зависимости от значения параметра в настройках, подготовим массив с парными данными
  // для перетасовывания массива используем прием с сортировкой
  // вместо сравнения фактических значений при сортировке функция вернет случайное число
  return RANDOMIZED
    ? mergedImages.sort(() => 0.5 - Math.random())
    : mergedImages;
};
