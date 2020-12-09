const express = require("express");
const nastaveni = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");
// setting up the config file to load
nastaveni.config({ path: "./config/config.env" });

// connect to db
connectDB();

// route files
const bootcamps = require("./routes/bootcamps");

const app = express();

// dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `This server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
      .yellow.bold
  )
);

// handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // close server connection and exit the app
  server.close(() => process.exit(1));
});
