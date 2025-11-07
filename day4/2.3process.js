//process - thong tin ve node process

//thong tin moi truong 
console.log("Node version:", process.version);
console.log("Platform:", process.platform); // 'win32', 'darwin', 'linux'
console.log("Current directory:", process.cwd());


// Arguments từ command line
console.log("Arguments:", process.argv);
// node app.js arg1 arg2
// process.argv = ['node', '/path/to/app.js', 'arg1', 'arg2']

// Environment variables
console.log("Environment:", process.env.NODE_ENV);
console.log("User:", process.env.USER);

// Memory usage
console.log("Memory:", process.memoryUsage());

// Thoát chương trình
// process.exit(0); // 0 = success
// process.exit(1); // 1 = error