function createCounter() {
  let count = 0;

  return function () {
    count++
    return count
  }
}

const counter = createCounter()
console.log(counter())          // tha ektiposei 1
console.log(counter())          // tha ektiposei 2 giati krataei thn teleutaia timh apo prin

// kai auto einai ena closure
function createCounter2() {
  let count = 0;

  return {
    increment: function () {count++; return count},
    getCount: function() {
      return count;
    }
  }
}

const counter2 = createCounter2()
console.log(counter2.increment());        // vazoume teleia kai -kati- giati einai obj kai bainoume eswterika
console.log(counter2.getCount());         // vazoume teleia kai -kati- giati einai obj kai bainoume eswterika



