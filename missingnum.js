let arr = [1, 2, 3, 5];
let missing = 0;
for (let i of arr) {
  if (arr[i + 1] - arr[i] != -1) {
    missing = arr[i] - 1;
  }
}

console.log("missing number = ", missing);
