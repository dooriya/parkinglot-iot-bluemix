var hmc = require("hmc5883l-pi");
var data = hmc.readMag();
console.log("{\"x\":" + data.x + ",\"y\":" + data.y + ",\"z\":" + data.z + "}");
