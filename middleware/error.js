const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (error, req, res, next) => {
  let chyba = { ...error };

  chyba.message = error.message;

  // log to console for developer
  console.log(error);
  // mongoose bad objectId
  if (error.name === "CastError") {
    const message = `Bootcamp id ${error.value} not found!`;
    chyba = new ErrorResponse(message, 404);
  }

  // mongoose duplicate key
  if (error.code === 11000) {
    const message = `You have used duplicate database entry!`;
    chyba = new ErrorResponse(message, 400);
  }

  // mongoose validation errors
  if (error.name === "ValidationError") {
    const message = Object.values(error.errors).map((val) => val.message);
    chyba = new ErrorResponse(message, 400);
  }

  // response
  res
    .status(chyba.statusCode || 500)
    .json({ success: false, error: chyba.message || "Server error" });
};

module.exports = errorHandler;
