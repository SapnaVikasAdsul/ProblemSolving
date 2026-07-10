//first not repeated char

let str = "maabbccefg";

//Approach 1
const count = {};
for (let ch of str) {
  count[ch] = (count[ch] || 0) + 1;
  console.log(count)
}
for (let i in count) {
  console.log(i);
  if (count[i] === 1) {
    console.log(i);
    break;
  }
}

//Approach 2 - map
let map = new Map();

for (let ch of str) {
  map.set(ch, (map.get(ch) || 0) + 1);
}

for (let ch of str) {
  if (map.get(ch) === 1) {
    console.log(ch);
    break;
  }
}