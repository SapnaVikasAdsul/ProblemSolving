let arr = [1, 0, 3, 4, 6, 0, 8, 7];
let zeroCount = 0;

//approach 1
let arr1 = [];
for (let n of arr) {
  if (n !== 0) {
    arr1.push(n);
  } else {
    zeroCount++;
  }
}
while (zeroCount > 0) {
  arr1.push(0);
  zeroCount--;
}
console.log(arr1);

//Approach 2
let j = 0; //move nozero elements at this position
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    j++;
  }
}
console.log(arr);
