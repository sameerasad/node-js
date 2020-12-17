const EventEmitter = require("events");
const { listenerCount } = require("process");
const emitter = new EventEmitter();

//register a listener
emitter.on("Message logged", () => {
  console.log("message logged");
});
//raise an event
emitter.emit("Message logged");
