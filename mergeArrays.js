let arr1 = [1, 2, 3, 45];
let arr2 = [4, 5, 6, 7]

let arr3 = []
for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i])
}
for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr2[i])
}
console.log(arr3)

//merge in arr1
arr1.push(...arr2);
console.log(arr1)

//merge using spread op
let merged = [...arr1, ...arr2]
console.log(merged)