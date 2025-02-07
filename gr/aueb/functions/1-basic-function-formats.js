
// vasikh morfh gia dhlosh function
console.log(greet("Andreas"))  // ginete hoisted kai boroume na to kalesoume prin to function

function greet(name) {
  return `Hello, ${name}`
}

function add(a,b) {
  return a+b
}
console.log(greet("Andreas"))

// Function expressions
const mul = function (a, b) {
  return a * b;

}
let result = mul(3, 4);


// arrow functions
const div = (a, b) => a / b;




