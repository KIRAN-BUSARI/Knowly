const mongoose = require("mongoose");
const MongoDB_URL =
  process.env.MongoDB_URL;

// mongoDb database connection
const databaseconnect = () => {
  mongoose
    .connect(MongoDB_URL)
    .then((conn) => console.log(`connected to DB: ${conn.connection.host}`))
    .catch((err) => console.log(err.message));
};

module.exports = databaseconnect;
