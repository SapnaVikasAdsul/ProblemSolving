let str = "I am Sapna";

let str1 = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    str1 += str[i];
  }
}
console.log(str1);

let res=str.replaceAll(" ","");