const numbers = [1, 2, 3, 4];

// Modifies the initial array
numbers.push(5);
numbers.splice(4, 0, 5)  // thesi 4 na diagrapsei 0 na valei to 5


function addToArrayEnd(arr, num) {
  return [...arr, num];
}

function addToArrayStart(arr, num) {
  return [num, ...arr];
}

function addToArrayAtIndex(arr, num, index) {
  return [...arr.slice(0, index), num, ...arr.slice(index)];
}

//updates (we want immutables)
numbers.splice(3, 1, 8);         //epireazei ton pinaka

const updateArray = (arr, newVal) => arr.map(item => newVal)

// Fresh copy
const updateOneItem = (arr, index, newVal) => arr.map((item, i) => (i === index)) ? newVal : item

const updatedNumbers = updateOneItem(numbers, 2, 17);
console.log(updatedNumbers)

//delete  (panta otan kanoume update h diagrafh psaxnoume prwta an uparxei)
let index = numbers.indexOf(1)
if (index != -1) numbers.splice(index, 1);        // epireazei ton pinaka


//Fresh copy of deleted array
const deleteFromArray = (arr, num) => arr.filter(item => item != num)   // fernei mono osous einai != num -- pou shmenei svinei ta num

const deleteByIndex = (arr, index) => [[arr.slice(0, index), ...arr.slice(index + 1)]]  //immutable


