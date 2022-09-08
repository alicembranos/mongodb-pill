// INSERT AUTHORS
// -------------------
db.authors.insertMany([
  {
    name: "Camilo José",
    lastName: "Cela",
    dateOfBirth: new Date(1935, 05, 11),
    dateOfDeath: new Date(2012, 12, 01),
    country: "España",
  },
  {
    name: "Angeles",
    lastName: "Caso",
    dateOfBirth: new Date(1960, 03, 07),
    dateOfDeath: new Date(2022, 03, 07),
    country: "España",
  },
  {
    name: "Milan",
    lastName: "Kundera",
    dateOfBirth: new Date(1954, 10, 07),
    dateOfDeath: new Date(2021, 11, 29),
    country: "España",
  },
]);

// INSERT BOOKS
// -------------------
db.books.insertMany([
  {
    title: "Things Fall Apart",
    year: 1958,
    category: "drama",
    Authors: [
      {
        _id: ObjectId("63199ef73e311b652a4c62e7"),
        name: "Milan",
        lastName: "Kundera",
      },
    ],
  },
  {
    title: "Fairy tales",
    year: 1836,
    category: "romantic",
    Authors: [
      {
        _id: ObjectId("63199ef73e311b652a4c62e6"),
        name: "Angeles",
        lastName: "Caso",
      },
    ],
  },
  {
    title: "The Divine Comedy",
    year: 1315,
    category: "comedy",
    Authors: [
      {
        _id: ObjectId("63199ef73e311b652a4c62e5"),
        name: "Camilo Jose",
        lastName: "Cela",
      },
    ],
  },
  {
    title: "The Epic Of Gilgamesh",
    year: 1700,
    category: "history",
    Authors: [
      {
        _id: ObjectId("63199ef73e311b652a4c62e7"),
        name: "Milan",
        lastName: "Kundera",
      },
    ],
  },
  {
    title: "The Book Of Job",
    year: 1986,
    category: "romantic",
    Authors: [
      {
        _id: ObjectId("63199ef73e311b652a4c62e6"),
        name: "Angeles",
        lastName: "Caso",
      },
    ],
  },
  {
    title: "One Thousand and One Nights",
    year: 1200,
    category: "drama",
    Authors: [
      {
        _id: ObjectId("63199ef73e311b652a4c62e6"),
        name: "Angeles",
        lastName: "Caso",
      },
    ],
  },
  {
    title: "Nj\u00e1l's Saga",
    year: 1350,
    category: "divers",
    Authors: [
      {
        _id: ObjectId("63199ef73e311b652a4c62e5"),
        name: "Camilo Jose",
        lastName: "Cela",
      },
    ],
  },
  {
    title: "Pride and Prejudice",
    year: 1813,
    category: "drama",
    Authors: [
      {
        _id: ObjectId("63199ef73e311b652a4c62e6"),
        name: "Angeles",
        lastName: "Caso",
      },
    ],
  },
  {
    title: "La pleure Goriot",
    year: 1835,
    category: "romantic",
    Authors: [
      {
        _id: ObjectId("63199ef73e311b652a4c62e7"),
        name: "Milan",
        lastName: "Kundera",
      },
    ],
  },
  {
    title: "Molloy, Malone Dies, The Unnamable, the trilogy",
    year: 1952,
    category: "history",
    Authors: [
      {
        _id: ObjectId("63199ef73e311b652a4c62e7"),
        name: "Milan",
        lastName: "Kundera",
      },
    ],
  },
]);
