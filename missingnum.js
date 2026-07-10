//given : arr=[1,2,3,5,6] len=6

let arr = [1, 2, 3, 5];
let len = 5
let total = (len * (len + 1)) / 2;
let sum = 0
for (let n of arr) {
  sum += n;
}

console.log("missing number = " + (total - sum));

