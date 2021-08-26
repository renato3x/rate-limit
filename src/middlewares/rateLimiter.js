const rateLimit = require('express-rate-limit')

module.exports = rateLimit({
  windowMs: 30 * 1000, // time window for making requests (in milliseconds)
  max: 1, //number of requests allowed in the time window
  keyGenerator(request, response) {
    return request.ip // identification key
  },
  handler(request, response) {
    return response.status(429).json({
      message: 'Too many requests. Please, try again later'
    }) // custom return when rate limiter was triggered
  }
})