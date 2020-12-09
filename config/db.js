const nastaveni = require("dotenv");
const mongoose = require("mongoose");
nastaveni.config({ path: "./config/config.env" });

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  console.log(
    `mongo db is connected: ${conn.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;
