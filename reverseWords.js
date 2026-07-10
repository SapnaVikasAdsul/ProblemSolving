let sentence = "I Live in Malewadi";

let reversedSent = sentence.split(" ").reverse().join(" ");
let sentence1 = ""
let words = sentence.split(" ")
console.log(words.length)
for (let i = words.length - 1; i >= 0; i--) {
    sentence1 += words[i]+" "
    
}

console.log(sentence1);
