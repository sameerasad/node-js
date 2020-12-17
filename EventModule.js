const Logger = require("./logger");

require("./logger");
const logger = new Logger();
//register a listener

logger.on("logger", (arg) => {
  console.log("message logged", arg);
});

logger.log("message");
