const users = [
  {id: 1, firstname: "Alice", email: "alice@sds.fsdf", isActive: true},
  {id: 2, firstname: "Bob", email: "bob@sds.fsdf", isActive: false},
  {id: 3, firstname: "Costas", email: "costas@sds.fsdf", isActive: true}
]

users.forEach(u => console.log(u));

// gia na paroume ta emails
const emails = users.map(user => user.email);
console.log(emails)

// gia na paroume tous active
const activeUsers = users.filter(user => user.isActive)       // === true (epidei de to valame)
console.log(activeUsers);

const cart = [
  {title: "laptop", price: 1000, stock: 10},
  {title: "mouse", price: 50, stock: 0},
  {title: "keyboard", price: 80, stock: 20}
]

const totalSum = cart.reduce((acc, item) => acc + item.price, 0)
console.log(totalSum);

// gia na vroume find -- epistrefei stoixeio (oxi pinaka -- gia pinaka kanoume fiter anti gia find)
const user = users.find(user => user.email === "alice@sds.fsdf")
console.log(user);

// gia na vroume index
const userIndex = users.findIndex(user => user.email === "alice@sds.fsdf")
console.log(userIndex);

// na doume out of stock 
const isOutOfStock = cart.some(item => item.stock === 0)
const isAllOutOfStock = cart.every(item => item.stock === 0)
console.log(isOutOfStock);
console.log(isAllOutOfStock);

const posts = [
  {title: "post1", tags: ["js", "web"]},
  {title: "post1", tags: ["nodejs", "backend"]},
  {title: "post1", tags: ["react", "frontend"]}
]

const allTags = posts.flatMap(post => post.tags)
console.log(allTags)


const fruits = ["Apples", "Oranges"]
for (const [index, fruit] of fruits.entries()) {
  console.log(`Index: ${index}, Product: ${fruit}`)
}


// filter, map, reduce -- einai h seira