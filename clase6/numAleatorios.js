const hasta = 10000;
let result = {};
let generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let i = 0; i < hasta; i++) {
  let randomNumber = generateRandomNumber(1, 20);
  result[randomNumber] = result[randomNumber] ? result[randomNumber] + 1 : 1;  
}

console.log(result);

// Math.floor = 1.2 -> 1
// Math.ceil = 1.9 -> 2
// Math.round = 1.4 -> 1