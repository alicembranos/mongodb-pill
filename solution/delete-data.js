// DELETE DATA
// -------------------
db.books.deleteOne({ _id: ObjectId("63199f363e311b652a4c62f1") });

db.authors.deleteMany({ dateOfDeath: { $exists: true } });
