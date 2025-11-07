let fs = require("fs");

// readFile() - Async (Non-blocking)
fs.readFile("data.txt", "utf8", (error, data) => {
  if (error) {
    console.error("Error reading file:", error);
    return;
  }
  
  console.log("File content:");
  console.log(data);
});

console.log("This runs first!");

// Output:
// This runs first!
// File content:
// (nội dung file)