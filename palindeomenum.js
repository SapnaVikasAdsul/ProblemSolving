let n = 123
let reminder = 0
let reverse = 0
while (n > 0) {
    reminder = n % 10;
    reverse = reverse * 10 + reminder;
    n = Math.floor(n / 10)
}
console.log(reverse)
if(n===reverse){
    console.log("palindrome")
}