const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU core
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());

// Kernel
console.log(os.release());

// User info
console.log(os.userInfo());

// Network info
console.log(os.networkInterfaces());
