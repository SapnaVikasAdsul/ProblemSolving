//remove element in-place
const arr = [2, 4, 52, 12, 77];
const remove = 2;
for (let i=0; i<arr.length;i++) {
    if (arr[i] === remove) {
        arr.splice(i, 1);
        break;
    }
}

console.log(arr)