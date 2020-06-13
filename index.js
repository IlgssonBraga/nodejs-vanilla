const Logger = require('./reference/logger');

const logger = new Logger();

logger.on('message', data => console.log('Called listener:', data));

logger.log('Hello');
logger.log('How you doin?');
logger.log('Nice');