const express = require("express");
const nastaveni = require("dotenv");

// setting up the config file to load
nastaveni.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `This server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
