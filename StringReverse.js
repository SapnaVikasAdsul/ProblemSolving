let str = "sapna";

// Approach 1
let s = "";
for (let i = str.length; i >= 0; i--) {
  s = s + str.charAt(i) + "";
  console.log(s);
}
console.log("reverse ", s);

// Approach 2 
let len = str.length;
let arr = str.split("");
for (let i = 0; i < len / 2; i++) {
  let temp = arr[i];
  arr[i] = arr[len - i];
  arr[len - i] = temp;
}
let reverse = arr.join("");
console.log("reverse swap ", reverse);

// Approach 3 - built in
let reverse1 = str.split("").reverse().join("");
console.log("built in rev ", reverse1);
