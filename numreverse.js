let num = 1234;
let reverse = 0;
while (num > 0) {
  let reminder = num % 10;
  reverse = reverse * 10 + reminder; //

  num = Math.floor(num / 10);
}

console.log("reverse num ", reverse);
