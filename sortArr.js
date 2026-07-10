let arr = [2, 6, 3, 7, 4, 1];
//Approach 1
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
// if (arr[i] > arr[j]) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
//   }
// }
// console.log(arr);

//Approach 2
for (let i = 0; i < arr.length - 1; i++) {
  let min = i;

  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) {
      min = j;
    }
  }

  [arr[i], arr[min]] = [arr[min], arr[i]];
}

console.log(arr);
