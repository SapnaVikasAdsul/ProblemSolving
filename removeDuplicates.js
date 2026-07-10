let arr = [1, 2, 3, 3, 4, 4];
let unique = [];
for (let i = 0, j = i + 1; i < arr.length; i++, j++) {
  if (arr[i] !== arr[j]) {
    unique.push(arr[i]);
  }
}
console.log("uniquearr = ", unique);


