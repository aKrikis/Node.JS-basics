const arr = [1,2,3,4,5,6,7,8];

// delete
const arr2 = arr.splice(0, 4) // thesh 0 kai na diagrapsei 4 stoixeia .. auto pou diagrafetai paei sto arr2
console.log(arr2);
console.log(arr);

//Insert
arr.splice(0, 0, 10); //apo thn thesh 0 diegrapse 0 stoixeia kai vale to 10 sth thesh 0
console.log(arr);

//Update
arr.splice(0, 1, 11) // sth thesh 0 svise 1 stoixeio kai vale to 11 (svinei to 10)
console.log(arr);


