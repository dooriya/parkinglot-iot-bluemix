var wpi = require('wiring-pi');
var CONFIG_PIN = 7;
wpi.setup('wpi');
wpi.pinMode(CONFIG_PIN, wpi.OUTPUT);
wpi.digitalWrite(CONFIG_PIN, 0);