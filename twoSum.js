let arr = [2, 4, 3, 6, 7, 8, 9];
let target = 9;

// Approach 1 - loop
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      console.log([arr[i], arr[j]]);
    }
  }
}

// Approach 2 - Map
let map = new Map()

for (i = 0; i < arr.length; i++) {
  let complement = target - arr[i];
  if (map.has(complement)) {
    console.log([arr[i], complement])
  }
  map.set(arr[i], i)
}
