// UPDATE DATA
// -------------------
db.authors.updateOne(
  { _id: ObjectId("63199ef73e311b652a4c62e6") },
  { $set: { dateOfDeath: new Date(2022, 06, 05) } }
);

db.books.updateOne(
  { _id: ObjectId("63199f363e311b652a4c62f1") },
  { $set: { year: 1965 } }
);

db.books.updateOne(
  { _id: ObjectId("63199f363e311b652a4c62f0") },
  { $set: { title: "La pleure Goriot New Edition" } }
);
