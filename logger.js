console.log(__dirname);
console.log(__dirname);
var url = "http/sameer.io/log";
const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    this.emit("logger", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
