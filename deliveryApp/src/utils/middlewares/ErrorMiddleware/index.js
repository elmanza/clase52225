class ErrorMiddleware{
  static logErrors(err, req, res, next){
    // Sentry
    console.log(`[LogError]`);
    console.error(err);
    next(err);
  }

  static boomHandler(err, req, res, next){
    if(err?.isBoom){
      const { output } = err;
      return res.status(output.statusCode).json(output.payload);
    }
    next(err);
  }

  static errorHanlder(err, req, res, next){
    res.status(500).json({
      message: err.message,
      stack: err.stack
    })
  }
}

module.exports = ErrorMiddleware;