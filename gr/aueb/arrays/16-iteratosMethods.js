const students = ["Alice", "Andreas", "Bob", "Kostas"];

students.forEach(function(stu, index, arr){
  console.log(stu)
  console.log(stu, index)
  console.log(stu, index, arr)
})


let filtered = students.filter(student => student === "Andreas")
console.log(filtered)       // epistrefei pinaka me to andreas

let mapped = students.map(student => "Student: " + student)
console.log(mapped)         // tha paroume Studen: Alice Student: Andreas....

const numbers = [1,6,9,12]
let sum = numbers.reduce((total, val) => total + val, 0)
console.log(sum)