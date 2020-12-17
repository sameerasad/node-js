const fs = require("fs");
fs.readdir("./", (err, files) => {
  if (err) console.log("ERROR", err);
  else console.log("Files", files);
});
