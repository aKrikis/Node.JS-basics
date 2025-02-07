function greet(name) {
  if (name == undefined) {
    name = "Guest"
  }
  console.log(`hello, ${name}`);
}

// default params
function getUser(name = "Guest", age = 18) {
  return {name, age}
} 
const obj = getUser()
console.log(obj);

function getFormatedDateTime(locale = "en-Us", options = {year: "numeric", month: "long", day: "numeric", weekday: "long", hour: "2-digit", minute: "2-digit", seconds: "2-digit", hour12: true}) {
  const now = new Date()
  return now.toLocaleDateString(localStorage, options)
}
console.log(getFormatedDateTime("el-GR"));
