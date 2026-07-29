let str1 = "listen";
let str2 = "silent";

let s1 = str1.split("").sort().join("");
let s2 = str2.split("").sort().join("");
if (s1 === s2) {
  console.log("strings are angrams");
} else {
  console.log("not anagrams");
}

//counter approach
if (str1.length !== str2.length) {
  console.log("not anagrams");
} else {
  const freq = {};
  for (let ch of str1) {
    freq[ch] = (freq[ch] || 0) + 1;
    console.log(freq[ch]);
  }
  for (let ch of str2) {
    if (!freq[ch]) {
      console.log("not anagrams");
      return;
    }
    freq[ch]--;
    console.log()
  }
  console.log("anagrams");
}