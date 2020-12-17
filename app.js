const Logger = require("./logger");

require("./logger");
const logger = new Logger();

console.log(logger);
logger.log("message");
