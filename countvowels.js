const str = "sapna";
let count = 0;
for (let i in str) {
  let s = str.charAt(i);
  if (s == "a" || s == "e" || s == "i" || s == "o" || s == "u") {
    count++;
  }
}
console.log("number of vowels=", count);

