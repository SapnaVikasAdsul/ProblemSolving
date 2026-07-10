const arr = [1, 2, 3, 4, 5, 6];
let n = arr.length - 1
console.log(n, arr.length)
for (let i = 0; i < (arr.length - 1) / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[n];
    arr[n] = temp

    n--
}
console.log(arr)