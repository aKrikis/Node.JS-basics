const initial = [1, 2, 3]
const copy = [...initial] //thelei 3 telies kai dinei mia lista ta stoixeia tou pinaka

const extended = [0, ...initial, 4];
const chars = [..."Hello"] //kanei spread to hello --> "H", "e", "l", "l", "o"

console.log(copy);
console.log(extended);
console.log(chars);