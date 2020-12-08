const express = require("express");
const nastaveni = require("dotenv");
const morgan = require("morgan");
// const logger = require("./middleware/logger");

// route files
const bootcamps = require("./routes/bootcamps");

// setting up the config file to load
nastaveni.config({ path: "./config/config.env" });

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
  )
);
