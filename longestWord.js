let str = "I am sapna from baramati";

let longest = "";
let words = str.split(" ").reduce((longest, current) => {
  current.length>longest.length?current:longest
});

// for (let w of words) {
//   if (w.length > longest.length) {
//     longest = w;
//   }
// }
console.log(longest);
