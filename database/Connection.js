// const { Pool } = require('pg');
const mongoose = require("mongoose");

const DB_URI =
  "mongodb+srv://Kat:kat@cluster0.q8upq.mongodb.net/ADKMenuMaker?retryWrites=true&w=majority";

const connectDB = () => {
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "ADKMenuMaker",
  })
  .then(() => console.log('Connected to Mongo DB'))
  .catch((err) => console.log(err));

  mongoose.set('useCreateIndex', true)

};

module.exports = connectDB;
