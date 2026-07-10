function isPalindrome(str) {
  let n = str.length - 1;
  for (let i = 0; i < n; i++) {
    if (str[i] !== str[n]) {
      return false
    }
    n--
  }
  return true
}
console.log(isPalindrome("nama"))


