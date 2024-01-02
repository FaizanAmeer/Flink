function errorHandler(err, req, res, next) {
  console.log(res.statusCode);

  const statusCode = err.statusCode ? err.statusCode : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    status: err.status,
    statusCode: err.statusCode ? err.statusCode : statusCode,
    stack: err.stack,
  });
}

module.exports = errorHandler;
