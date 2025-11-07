//Phan 1: if/else
let age = 17;
let result = age >= 18 ? "Da lon" : "chua lon"

console.log(result)

//bai 2
let number = 7;
let result1 = number % 2 === 0 ? 'so chan' : 'so le'

console.log(result1)

//bai 3
let tuoi = 16;
let duocPhep = false;

let result2 = (tuoi >= 18 || duocPhep === true) ? 'duoc phep' : 'khong duoc phep'
console.log(result2)

//Phan 2: vong lap
//1: For
//cu phap co ban
for (let i = 0; i < 3; i++) {
    console.log(`Lan lap thu: ${i}`);
}

//voi mang
let fruits = ['tao', 'chuoi', 'cam']
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}
console.log('================================ Hoac: ================================')
for (let fruit of fruits) {
    console.log(fruit)
}

//WHILE
let count = 0;
while (count < 5) {
    console.log(`Count la: ${count}`)
    count++;
}

let num = 0;
do {
    console.log(num);
    num++;
} while (num < 10);


//Thuc hanh:
//bai 1:
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//bai2: 
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//bai 3: 
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

//bai 4:
let students = ['nam', 'huy', 'tung', 'bach'];
for (student of students) {
    console.log(student)
}

console.log('==============PHAN 4==================')
//phan 4: functions
//4.1: function co ban:
//khai bao function
function sayHello() {
    console.log('Hello');
}
sayHello()

//function co tham so
function sayName(name) {
    console.log(`Hello ${name}`)
}

sayName('Duy')

//function co return
function sumAb(a, b) {
    return a + b;
}

let resultSum = sumAb(3, 5);
console.log(resultSum)

//function voi nhieu tham so
function introduce(name, age, city) {
    return `Toi ten ${name}, nam nay ${age} tuoi, den tu ${city}`
}
console.log(introduce('Minh', '18', 'Da Nang'))

console.log('================4.2: Arrow Function=============')
//4.2: Arrow Function
//cach cu
function multiply(a, b) {
    return a + b
}

//cach moi
const multiply2 = (a, b) => {
    return a * b;
}

//ngan gon neu chi co 1 dong return 
const multiply1 = (a, b) => a * b

//neu chi co 1 tham so thi bo duoc ()
const square = x => x * x;

//khong co tham so
const sayHi = () => console.log("Hi!")
sayHi()

console.log("~~~~~~~~~~~~~~~~~~Thuc hanh~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("=====================Bai 1: Tim so chan=======================")
function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(3))
console.log(isEven(6))

console.log("=====================Bai 2: Tinh dien tich=======================")
const calculateArea = (width, height) => width * height;

console.log(calculateArea(4, 5))

console.log("=====================Bai 3: tim so lon nhat=======================")
const findMax = (a, b, c) => {
    if (a > b && b > c) { return a; }
    else if (b > a && b > c) { return b; }
    else return c;
}
console.log(findMax(2, 4, 6))

console.log("=====================Bai 4:Ham doi do C sang do F =======================")
const celsiusToFahrendeit = celsius => (celsius * 9 / 5) + 32;

console.log(celsiusToFahrendeit(0))
console.log(celsiusToFahrendeit(100))

console.log("=====================BÀI TẬP TỔNG HỢP NGÀY 1 =======================")
console.log("=====================Bai 1:Ham kiem tra nam Nhuan =======================")
function isLeapYear(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

console.log(isLeapYear(2025))
console.log(isLeapYear(2026))

console.log("=====================Bai 2:function tinh giai thua =======================")

function factorial(n) {
    let factor = 1;
    for (let i = n; i >= 1; i--) {
        factor *= i;
    }
    return factor;
}

console.log(factorial(5))

console.log("=====================Bai 3:function dem so nguyen am trong chuoi =======================")
function countVowels(str) {
    
}



