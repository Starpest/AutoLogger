const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json() // Use structured logging format (JSON)
  ),
  transports: [
    new winston.transports.Console(), // Logs will be displayed in the console
    new winston.transports.File({ filename: 'debug.log' }) // Logs will be written to 'debug.log' file
  ]
});

// Sample log with variables and context
const userId = 123;
const action = 'user_login';
const ipAddress = '192.168.1.100';

logger.debug('User login attempt', { userId, action, ipAddress });
