function convertMeters(meters) {
  return {cm: meters * 100,
  mm: meters * 1000 }
}

function convertCentimeters(cm) {
  return {meters: cm / 100,
  mm: cm * 10 }
}

function convertMilimeters(mm) {
  return {meters: mm / 1000,
  cm: mm / 10 }
}


const obj = convertMilimeters(1500)
console.log(obj.meters)
console.log(obj.cm)