console.log('=======1.1.ForEach(Lặp qua từng phần tử)=========')
let numbers = [1, 2, 3, 4, 5]

console.log('=======old way=========')
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

console.log('=======new way=========')
numbers.forEach(function (num) {
  console.log(num)
})

// 
console.log('=======forEach voi arrowFunction=========')

numbers.forEach(num => console.log(num))

console.log('=======forEach co index=========')
numbers.forEach((num, index) => {
  console.log(`Vi tri ${index}: ${num}`)
})

console.log('=======1.2.Map (Biến đổi mảng)=========')

console.log('=======Nhan doi moi so=========')
let doubled = numbers.map(num => num * 2);
console.log(doubled)

console.log('========Lấy chỉ tên=======')
let users = [
  { name: 'An', age: '18' },
  { name: 'Binh', age: '19' },
  { name: 'Name', age: '20' }
]

let names = users.map(user => user.name)
console.log(names)

let userWithId = users.map((user, index) => {
  return {
    id: index + 1,
    name: user.name,
    age: user.age
  };
});

console.log(userWithId)

console.log('=======1.3.filter (Loc mảng)=========')
console.log('=======Loc so chan=========')
let evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers)

console.log('=======Loc so le=========')
let oddNumbers = numbers.filter(num => num % 2 !== 0)
console.log(oddNumbers)

console.log('=======Loc so lon hon 5=========')
let bigNumber = numbers.filter(num => num < 5);
console.log(bigNumber);

let products = [
  { name: "Laptop", price: 20000000, inStock: true },
  { name: "Mouse", price: 200000, inStock: true },
  { name: "Keyboard", price: 500000, inStock: false },
  { name: "Monitor", price: 5000000, inStock: true }
]

console.log('==========Lọc Sản Phẩm Còn Hàng============')
let availabelProducts = products.filter(product => product.inStock)
console.log(availabelProducts)

console.log('==========Lọc Sản Phẩm dưới 1 triệu============')
let cheapProducts = products.filter(product => product.price < 1000000)
console.log(cheapProducts)

console.log('==========1.4.Find (Tìm phần tử đầu tiên)============')
let users1 = [
  { id: 1, name: "An", age: 25 },
  { id: 2, name: "Bình", age: 30 },
  { id: 3, name: "Cường", age: 28 }
];

console.log('==========Tìm người dùng có id = 2 ============')
let user = users1.find(u => u.id === 2)
console.log(user)

console.log('==========Tìm người dùng có age > 28 ============')
let userWithAge = users1.find(u => u.age > 28);
console.log(userWithAge)

console.log('==========Không tìm thấy trả về undefined ============')
let notFound = users1.find(u => u.id === 999)
console.log(notFound)

console.log('==========Method(pop, push, unshift,...)============')
console.log('==========Method Push (Thêm vào cuối)============')
numbers.push(6)
console.log(numbers)

console.log('==========Method Pop (Xóa phần tử cuối)============')
numbers.pop()
console.log(numbers)

console.log('==========Method Unshift (Thêm vào đầu)============')
numbers.unshift(0)
console.log(numbers)

console.log('==========Method Shift (Xóa phần tử đầu)============')
numbers.shift()
console.log(numbers)

console.log('==========Method Includes (Kiểm tra có chứa không)============')
console.log(numbers.includes(3)) //kiem tra co so 3 khong
console.log(numbers.includes(10))

console.log('==========Method IndexOf (Tìm vị trí)============')
console.log(numbers.indexOf(3))
console.log(numbers.indexOf(1))

console.log('==========Method Slice (Cắt Mảng(Không làm thay đổi mảng))============')
let sliced = numbers.slice(1, 3)
console.log(sliced)
console.log(numbers)

console.log('==========Method Splice (Xóa/Thêm Phần Tử(thay đổi mảng))============')
numbers.splice(2, 1) // xóa 1 phần tử tại vị trí 2
console.log(numbers)

console.log('==========Method join (Nối thành String)============')
let joined = numbers.join("-")
console.log(joined)

console.log('==========Thực hành Array Method============')
console.log('========Bài Tập 1==========')
let scores = [85, 92, 78, 95, 88, 76, 90];

console.log('========a. Lọc điểm >= 80 ==========')
let goodScores = scores.filter(s => s >= 80)
console.log(goodScores)

console.log('========b. Cộng 5 điểm cho all==========')
let bonusScores = scores.map(s => s + 5)
console.log(bonusScores)

console.log('========c. Tìm điểm đầu tiên >= 90 ==========')
let excellentScores = scores.find(s => s >= 90)
console.log(excellentScores)

console.log('========Bài Tập 2==========')
let product = [
  { id: 1, name: "Áo thun", price: 150000, category: "Quần áo" },
  { id: 2, name: "Quần jean", price: 450000, category: "Quần áo" },
  { id: 3, name: "Giày thể thao", price: 800000, category: "Giày dép" },
  { id: 4, name: "Túi xách", price: 350000, category: "Phụ kiện" },
  { id: 5, name: "Mũ lưỡi trai", price: 120000, category: "Phụ kiện" }
];

console.log('========a. Lấy Danh Sách Tên Sản Phẩm ==========')
let nameProducts = product.map(product => product.name)
console.log(nameProducts)

console.log('========b. Lọc Sản Phẩm Dưới 400k ==========')
let cheapProduct = product.filter(product => product.price < 400000)
console.log(cheapProduct)

console.log('========c. Lọc Sản Phẩm Thuộc "Phụ Kiện" ==========')
let accessories = product.filter(product => product.category === "Phụ kiện")
console.log(accessories)

console.log('========d. Tìm Sản Phẩm có id="3" ==========')
let productWithId = product.find(product => product.id === 3)
console.log(productWithId)

console.log('========e. Giảm giá 10% cho all ==========')
let salesProducts = product.map(product => {
  return {
    ...product, // copy tất cả thuộc tính cũ
    price: product.price * 0.9
  }
})
console.log(salesProducts)

console.log('=========Phần 2: Objects Nâng Cao========')
console.log('=========2.1 Làm việc với Objects')
let person = {
  name: "An",
  age: 25,
  city: "Hanoi",
  isStudent: true
}

console.log('=======Truy cập thuộc tính========')
console.log('=========Cách 1==========')
console.log(person.name)
console.log('=========Cách 2==========')
console.log(person["age"])

console.log('=======Thêm thuộc tính mới========')
person.email = "an@gmail.com"
person["phone"] = '0123456789'
console.log(person)

console.log('=======Xoa thuộc tính========')
delete person.isStudent
console.log(person)

console.log('=======Sửa thuộc tính========')
person.age = 27
console.log(person)

console.log('=======Object với Methods========')
let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  }
}

console.log(calculator.add(5, 3))
console.log(calculator.multiply(5, 3))

console.log('======== Destructuring (IMPORTANT!)========')
let user2 = {
  name: "Minh",
  age: 28,
  city: "Da Nang",
  email: "minh@gmail.com"
};

console.log('========Cách cũ========')
// let name = user2.name
// // let age = user2.age
// console.log(name)
// console.log(age)

console.log('========Cách mới========')
// let {name, age, city} = user2;
// console.log(name)
// console.log(age)

console.log('========Đổi tên biến========')
let { name: username, age: userAge } = user2;
console.log(username)

console.log('========Đổi tên biến========')
// // let {name, age, country = "Vietnam"} = user2;
// console.log(country)

console.log('========Destructuring Array========')
let colors = ["red", "green", "blue"];

let [first, second, third] = colors;
console.log(first)
console.log(second)
console.log(third)

console.log('========Bỏ qua phần tử========')
let [, , thirdColor] = colors;
console.log(thirdColor)

console.log('========2.3 Spread Operator (Rất quan trọng)========')
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

console.log('==========Nối Mảng===========')
let allNumbers = [...numbers1, ...numbers2];
console.log(allNumbers)

console.log('==========Copy Mảng===========')
let copyNumbers = [...numbers1]
console.log(copyNumbers)

console.log('==========Spread với Object===========')
let person2 = {
  name: "An",
  age: 25
};

let address = {
  city: "Hanoi",
  country: "Vietnam"
};

console.log('==========Gộp object==========')
let fullInfo = { ...person2, ...address }
console.log(fullInfo)

console.log('==========Copy và sửa object==========')
let updatePerson = {
  ...person2,
  age: 26,  //ghi de
  email: 'an@gmail.com' //Them moi
};

console.log(updatePerson)

console.log('========2.4 Object Methods========')
let person3 = {
  name: "An",
  age: 25,
  city: "Hanoi"
};

console.log('=========Object.keys() - Lấy danh sách keys========')
let keys = Object.keys(person3)
console.log(keys)

console.log('=========Object.values() - Lấy danh sách values========')
let values = Object.values(person3)
console.log(values)

console.log('=========Object.entries() - Lấy cặp key-value========')
let entries = Object.entries(person3)
console.log(entries)

console.log('=========Lặp qua object========')
Object.keys(person3).forEach(key => {
  console.log(`${key}: ${person3[key]}`)
})

console.log('=========Thực Hành Object========')
console.log('=========Bài tập 1: Quản lý sinh viên=========')
let student = {
  id: 1,
  name: "Nguyễn Văn A",
  age: 20,
  grades: {
    math: 8,
    physics: 7,
    chemistry: 9
  }
};

console.log('=========a.Destructure để lấy name và age=========')
let { name, age } = student;
console.log(name)
console.log(age)

console.log('=========b.Lấy điểm toán==========')
console.log(student.grades.math)

console.log('=========c.Thêm email==========')
student.email = "a@gmail.com"
console.log(student)

console.log('=========d.Tính điểm trung bình==========')
let { math, chemistry, physics } = student.grades;
let average = (math + chemistry + physics) / 3
console.log(average)

console.log('=========Bài tập 2: Merge Object=========')
let userInfo = {
  id: 1,
  username: "user123"
};

let userDetails = {
  name: "An",
  email: "an@gmail.com"
};

let userSettings = {
  theme: "dark",
  language: "vi"
};

console.log('=========Gộp Tất Cả=========')
let completedUser = { ...userInfo, ...userDetails, ...userSettings }
console.log(completedUser)

console.log('=========Bài tập 3: Array of Objects=========')
let students = [
  { id: 1, name: "An", grade: 8.5 },
  { id: 2, name: "Bình", grade: 7.2 },
  { id: 3, name: "Cường", grade: 9.0 },
  { id: 4, name: "Dũng", grade: 6.8 }
];

console.log('=========a.Lấy danh sách tên=========')
let listStudents = students.map(s => s.name)
console.log(listStudents)

console.log('=========b.Lọc sinh viên điểm >= 8=========')
let listGoodStudents = students.filter(s => s.grade >= 8)
console.log(listGoodStudents)

console.log('=========c.Tìm sinh viên có tên "Bình"=========')
let findUser = students.find(s => s.name === "Bình")
console.log(findUser)

console.log('=========d.Tính điểm trung bình của lớp=========')
let totalGrade = 0;
students.forEach(s => {
  totalGrade += s.grade
})

let averageGrade = totalGrade / students.length

console.log(averageGrade.toFixed(2))

console.log("============Phần 3: Json============")
console.log("==========3.1 What is Json?==========")

//here is object Javascript (not a json)
let person4 = {
  name: "An",
  age: 25,
  isStudent: true
};

//json is string (string text)
let jsonString = '{"name":"An","age":25,"isStudent":true}';

console.log(typeof person4)

console.log("==========3.2 Json.Stringify()- Object -> Json==========")
let user1 = {
  id: 1,
  name: "An",
  age: 25,
  hobbies: ["code", "music"],
  address: {
    city: "Hanoi",
    country: "Vietnam"
  }
};

let jsonString1 = JSON.stringify(user1)
console.log(jsonString1)

let prettyJson = JSON.stringify(user1, null, 2)
console.log(prettyJson)

console.log("==========3.3 JSON.parse() - JSON -> Object==========")
console.log("==========Với Object=============")
let jsonData = '{"name":"Minh","age":28,"city":"Da Nang"}';

let userData = JSON.parse(jsonData)
console.log(userData.name)
console.log("==========Với Array=============")

let jsonArray = '[{"id":1,"name":"An"},{"id":2,"name":"Bình"}]';
let userArray = JSON.parse(jsonArray)

userArray.map(u => {
  console.log(u.name)
})

console.log("==========3.4 Xử lý lỗi với JSON==========")
console.log("==========JSON không hợp lệ sẽ gây lỗi============")
// let invalidJson = '{name: "An"}'

// try {
//   let data = JSON.parse(invalidJson) //thieu quotes
//   console.log(data)
// } catch (error) {
//   console.log("Lỗi parse JSON: ", error.message)
// }

console.log("=========Thực Hành Với JSON============")
console.log('==========Bài tập 1: Chuyển đổi data=========')
let products1 = [
  { id: 1, name: "Laptop", price: 20000000 },
  { id: 2, name: "Mouse", price: 200000 },
  { id: 3, name: "Keyboard", price: 500000 }
];

console.log('======a) Chuyển thành JSON========')
let productData = JSON.stringify(products1, null, 2)
console.log(productData)

console.log('======b) Parse lại thành object======')
let parseProducts = JSON.parse(productData, null, 2)
console.log(parseProducts)

console.log("========Bai tap 2: lam viec voi api response(gia lap)==============")
let apiResponse = `{
  "status": "success",
  "data": {
    "users": [
      {"id": 1, "name": "An", "email": "an@gmail.com"},
      {"id": 2, "name": "Bình", "email": "binh@gmail.com"}
    ],
    "total": 2
  }
}`;

console.log('======Parse và lấy dữ liệu=======')
let apiResponseData = JSON.parse(apiResponse)
console.log(apiResponseData.status)
console.log(apiResponseData.data.total)

apiResponseData.data.users.forEach(user => {
  console.log(`${user.name} - ${user.email}`)
})

console.log('=======Phần 4: Template Literals và String Methods=======')
console.log('=======Template Literals=======')

let name1 = 'an'
let age1 = 25

console.log('=======Cach Cu========')
let message1 = "Tôi tên " + name1 + ", " + age1 + "tuổi"
console.log(message1)

console.log('======Cach Moi========')
let message2 = `Tôi tên ${name1}, ${age1} tuổi`
console.log(message2)

let html = `
  <div>
    <h1>Xin chao ${name1}</h1> 
    <p> Bạn ${age1} tuổi</p>
  </div>
`

console.log(html)
console.log('=========Expressions trong template========')
let price = 100000;
let quality = 3;

console.log(`Tổng tiền: ${price * quality} VND`)

let getGreeting = () => "xin chao"
console.log(`${getGreeting()} ${name1}`)

console.log('=======String methods=======')
let text = 'hello world';
console.log('=======Độ dài chuỗi=========')
console.log(text.length)

console.log('=======Chuyển hoa/ thường========')
console.log(text.toLowerCase())
console.log(text.toUpperCase())

console.log('==========Tìm kiếm===========')
console.log(text.includes("world"))
console.log(text.startsWith('hello'))
console.log(text.endsWith('world'))
console.log(text.indexOf('world'))

console.log('============Thay the===========')
console.log(text.replace('world', 'javascript'))

console.log('========Cắt Chuỗi===========')
console.log(text.slice(0, 3))
console.log(text.substring(6))

console.log('========Tách chuỗi==========')
let word = text.split(' ')
console.log(word)

console.log('========Xóa khoảng trắng đầu/ cuối==========')
let messy = '      hello '
console.log(messy.trim())

console.log('=======Repeat========')
console.log("Ha".repeat(3))

console.log('============Bài tập tổng hơp Day2==========')
console.log('======Bài 1: Shopping Cart===========')
let cart = [
  { id: 1, name: "Laptop", price: 20000000, quantity: 1 },
  { id: 2, name: "Mouse", price: 200000, quantity: 2 },
  { id: 3, name: "Keyboard", price: 500000, quantity: 1 }
];

console.log('============a) Tính tổng tiền (price * quantity cho mỗi item)========')
let total = cart.map(item => item.price * item.quantity).reduce((sum, itemTotal) => sum + itemTotal, 0)
console.log(total)

console.log('========b) Tìm sản phẩm có giá > 1 triệu========')
let findExpensiveCart = cart.filter(cart => cart.price > 10000000)
console.log(findExpensiveCart)

console.log('========c) Tạo array chỉ chứa tên sản phẩm=======')
let productNames = cart.map(item => item.name)
console.log(productNames)

console.log('======Bài 2: User Management===========')
let users2 = `[
  {"id": 1, "name": "An", "age": 25, "city": "Hanoi"},
  {"id": 2, "name": "Bình", "age": 30, "city": "Da Nang"},
  {"id": 3, "name": "Cường", "age": 22, "city": "Hanoi"},
  {"id": 4, "name": "Dũng", "age": 28, "city": "HCMC"}
]`;

console.log('========a) Parse JSON=========')
let userList = JSON.parse(users2)
console.log(userList)

console.log('==========b) Lọc users ở Hanoi=============')
let hanoiUser = userList.filter(user => user.city === 'Hanoi')
console.log(hanoiUser)

console.log('========c) Thêm email cho mỗi user (email = name@gmail.com)=========')
let userWithEmail = userList.map(u => ({
  ...u,
  email: `${u.name.toLowerCase()}@gmail.com`
}))

console.log(userWithEmail)

console.log('========d) Convert lại thành JSON===========')
let userWithEmailData = JSON.stringify(userWithEmail)
console.log(userWithEmailData)

console.log('========Bài 3: Data Processing==========')
let students1 = [
  { name: "An", scores: [8, 7, 9] },
  { name: "Bình", scores: [6, 7, 8] },
  { name: "Cường", scores: [9, 9, 10] }
];

console.log('=========Tính điểm trung bình cho mỗi sinh viên========')
let averageScores = students1.map(st => {
  let sum = st.scores.reduce((total, score) => total + score, 0)
  let average = sum / st.scores.length

  return{
    ...st,
    average: average.toFixed(2)
  }
})

console.log(averageScores)

console.log('=========Bài 4: String Processing=========')
let sentence = "   JavaScript is AWESOME   ";
console.log('==========a) Xóa khoảng trắng và chuyển thành lowercase==============')
let cleaned = sentence.trim().toLowerCase()
console.log(cleaned)

console.log('=====b) Thay "awesome" bằng "amazing"========')
let replaced = cleaned.replace("awesome", "amazing")
console.log(replaced)

console.log('========c) Tách thành array các từ=======')
let splitArray = replaced.split(" ")
console.log(splitArray)

console.log("=======d) Đếm số chữ cái 'a'=======")
let countWords = cleaned.split("").filter(char => char === "a").length
console.log(countWords)