const EventEmitter = require("events");

const emitter = new EventEmitter();
//register a listener
emitter.on("logging", (arg) => {
  console.log("logging", arg);
});
//raise an event
emitter.emit("logging", { data: "you are logged" });

//register a listener
emitter.on("Message logged", (arg) => {
  console.log("message logged", arg);
});
//raise an event
emitter.emit("Message logged", { id: 1, url: "HTTP://" });
