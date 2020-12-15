const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

// load config

dotenv.config({ path: "./config/config.env" });

// load models
const Bootcamp = require("./models/Bootcamp");

// connect to the database

mongoose.connect(process.env.dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// read JSON files
const bootcampsJSON = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, "utf-8")
);

// import in to db
const importData = async () => {
  try {
    await Bootcamp.create(bootcampsJSON);
    console.log("Data have been imported to the db..".green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// Delete all data

const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();
    console.log("Data have been deleted from the db..".red.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === "-import") {
  importData();
} else if (process.argv[2] === "-delete") {
  deleteData();
} else if ((console.log("Invalid or missing parameter"), process.exit()));
