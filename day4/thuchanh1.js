// Bài tập 1: CLI Calculator
// calculator.js

// Lấy arguments
console.log('===Lay arguments/ bo 2 phan tu dau====')
let args = process.argv.slice(2);

if (args.length < 3) {
    console.error("Usage: node thuchanh.js <num1> <operator> <num2>")
    console.error("Example: node thuchanh.js 5 + 3")
    process.exit(1)
}

let num1 = parseFloat(args[0])
let operator = args[1]
let num2 = parseFloat(args[2])

let results;

switch (operator) {
    case "+":
        results = num1 + num2;
        break;
    case "-":
        results = num1 - num2;
        break;
    case "*":
        results = num1 * num2;
        break;
    case "/":
        results = num1 / num2;
        break;
    default:
        console.error("Invalid operator. Use +, =, *, /")
        process.exit(1)
}

console.log(`${num1} ${operator} ${num2} = ${results}`)