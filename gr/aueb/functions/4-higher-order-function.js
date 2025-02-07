
// Higher order function -- poy epistrefei ena allo function
//Function Factory
// Onomazetai kai Closure giati krataei to ~2 mesa sto function
function createMultiplier(multiplier) {
  return function(num) {
    return num * multiplier
  }
}

//Me arrow function
const createMultiplier2 = (multiplier) => (num) => num * multiplier


const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5));





