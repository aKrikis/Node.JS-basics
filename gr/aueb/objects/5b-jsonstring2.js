
// einai JSON
const store = `[
  {"id": "pro4vog",
  "fields": {
      "company": "ikea",
      "colors": ["#FF1234", "#222"],
      "featured": true, 
      "price": 990,
      "genre": "white-black-chair"
    },

    {"id": "pro4vpr",
  "fields": {
      "company": "ikea",
      "colors": ["#AB199", "#222"],
      "featured": true, 
      "price": 880,
      "genre": "black-black-chair"
    },
}]`

// conver to JS Obj so we can console.log
console.log(JSON.parse(store));


