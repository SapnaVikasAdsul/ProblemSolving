const arr = [1, 3, 2, 3, 2, 4, 5, 6, 6, 5];
for (let i = 0; i < arr.length; i++) {
    let count = 1
    let alreadyCounted = false;

    for (let k = 0; k < i; k++) {
        if (arr[i] === arr[k]) {
            alreadyCounted = true
            break;
        }
    }
    if (alreadyCounted) {
        continue;
    }
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }
    console.log(arr[i] + "->" + count)
}