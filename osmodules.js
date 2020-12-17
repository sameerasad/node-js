const os = require("os");
const totalMemory = os.totalmem();
const platform = os.platform();
const info = os.userInfo();
const dir = os.homedir();

console.log(
  `memory:${totalMemory} platform: ${platform} UserInfo:${info} homedirectory: ${dir} `
);
