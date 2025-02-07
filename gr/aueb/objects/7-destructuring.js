
// arrays destructuring
const [a, b] = [1, 2];   // arrays destructuring

// Object destructur
const person = {
  firstname: "Slice",
  age: 25,
  city: "Athens"
}

const {firstname, age, city} = person  //Object destructure
console.log(firstname, age, city)

// // allaksame ta onomata stis metavlhtes
// const {firstname: first , age: newAge, city: myCity} = person;
// console.log(first, newAge, myCity)

// // allaksame kai thn perioxh
// const {firstname: first, age: newAge, city: myCity = "Toronto"} = person;
// console.log(first, newAge, myCity)

