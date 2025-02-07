const arr= [1, 2, 4, 5, 2, 6, 7, 2, 5, 8, 9, 9, 2]

// function na epistrefei enan pinaka me ta position opou vriskete enas sigkekrimenos arithmos

const getIndexes = (arr, val) => {
  const indexes = []

  arr.forEach((v, index) => {
    if (v === val) {           //einai san na exei enchanced for
      indexes.push(index)
    }
  })

  return indexes;
}

console.log(getIndexes(arr, 2));

