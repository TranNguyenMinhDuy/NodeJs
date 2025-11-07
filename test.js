// console.log - in ra terminal
console.log("Hello");
console.log("Name:", "An", "Age:", 25);

// console.error - in lỗi (màu đỏ)
console.error("This is an error!");

// console.warn - cảnh báo (màu vàng)
console.warn("Warning message");

// console.table - in dạng bảng
let users = [
  { id: 1, name: "An" },
  { id: 2, name: "Bình" }
];
console.table(users);

// console.time / console.timeEnd - đo thời gian
console.time("loop");
for (let i = 0; i < 1000000; i++) {
  // do something
}
console.timeEnd("loop");

// global-test.js

// __dirname - đường dẫn thư mục hiện tại
console.log("Directory:", __dirname);
// Output: /Users/username/projects/nodejs

// __filename - đường dẫn file hiện tại
console.log("File:", __filename);
// Output: /Users/username/projects/nodejs/global-test.js

// Lưu ý: Không có trong ES modules (import/export)