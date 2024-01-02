class AppResponse {
  static sucess(res, statusCode, data, messages) {
    return res.status(statusCode).json({
      messages,
      statusCode,
      data,
    });
  }
}
module.exports = AppResponse;
