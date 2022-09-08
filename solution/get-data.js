// GET DATA
// -------------------
db.books.find();

db.books.find({ category: "drama" });

db.books.find({ year: { $lt: 2002 } });

db.books.find({ "Authors.1": { $exists: true } });

db.authors.find();

db.authors.find({}, { dateOfDeath: 1, _id: 0 });

db.authors.find({ dateOfBirth: { $lt: ISODate("1990-01-01") } });

db.authors.find({ country: "España" });
