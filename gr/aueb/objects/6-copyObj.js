const initial = {name: "Alice", age: 33, address: {street: "Patission", num: 76}};

// copy -- spreading is shallow copy
const copyInitial = {...initial}   
console.log(copyInitial);

// 2. copy -- Object type
const copyInitial2 = Object.assign({}, initial)

//3. JSON function copy -- can copy Obj wich they have functions insede them // neither when they have undefined (DEEP COPY)
const copyInitial3 = JSON.parse(JSON.stringify(initial));

//4. Deep copy
const copyInitial4 = structuredClone(initial);


