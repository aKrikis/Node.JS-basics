const obj = {id: 1, firstname: "Alice"};

//Add properties

//Modify the object -- sto idio obj 
obj.lastname = "W.";
console.log(obj);

//Modify the object -- se neo copy obj (Immutable - fresh copy)
const addToObj = (obj, field, value) => ({...obj, [field]: value})
const objCopy = addToObj(obj, "lastname", "W.")
console.log(objCopy);

//Update the object -- Modifies - Update the obj (to idio obj)
obj.firstname = "Andreas"
console.log(obj);

// Immutable - fresh copy
const updateObj = (obj, field, newVal) => ({...obj, [field]: newVal})
const updatedObj = updateObj(obj, "firstname", "Costas")
console.log(updatedObj);

//delete a property of an obj


//Immutable delete
const deleteIdFromObj = (obj, field) => {
  const {[field]: _ , ...objToReturn} = obj
  return objToReturn;
}
const objFromDelete = deleteIdFromObj(obj, "id");
console.log(objFromDelete);
