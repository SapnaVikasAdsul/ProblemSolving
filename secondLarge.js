let arr = [47, 6, 4, 5, 55, 30, 7];
let max1 = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max1) {
    max1 = arr[i];
  }
}
let max2 = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max2 && arr[i] != max1) {
    max2 = arr[i];
  }
}
console.log("max1 = ", max1, " and max2 = ", max2);
