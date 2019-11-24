const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mood = "happy";
user.hobby = "javascript";
user.premium = false;

let keys = Object.keys(user);
let values = Object.values(user);

for (let item in keys) {
  console.log(`${keys[item]}: ${values[item]}`);
}

// for (let key in user) {
//   console.log(`${key}: ${user[key]}`);
// }
