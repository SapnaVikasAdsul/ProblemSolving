//convert string to a number
let str = "123.45"
console.log(str)
console.log(Number(str)) // str to number

console.log(parseInt(str)) // str to integer

console.log(parseFloat(str))

// Function declaration
console.log(foo()); // Works fine
function foo() {
    return 'Hello';
}
// Function expression
// console.log(bar()); // Throws TypeError: bar is not a function
var bar = function () {
    return 'Hello';
};

//Rest operator

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10


//spread
// Copying an array
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2); // Output: [1, 2, 3]
// Merging arrays
const arr3 = [4, 5, 6];
const mergedArray = [...arr1, ...arr3];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
// Copying an object
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };
console.log(obj2); // Output: { a: 1, b: 2 }
// Merging objects
const obj3 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj3 };
console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }
// Passing array elements as function arguments
const sum1 = (x, y, z) => x + y + z;
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

let arr = [1, 2, 3];
// Add elements
arr.push(4); // [1, 2, 3, 4]
arr.unshift(0); // [0, 1, 2, 3, 4]
arr.splice(2, 0, 1.5); // [0, 1, 1.5, 2, 3, 4]
// Remove elements
arr.pop(); // [0, 1, 1.5, 2, 3]
arr.shift(); // [1, 1.5, 2, 3]
arr.splice(1, 1); // [1, 2, 3]
// Update elements
arr[1] = 5; // [1, 5, 3]
console.log([...arr], arr); // Final state: [1, 5, 3]


// Shallow copy of an array
const originalArray = [1, 2, 3];
const shallowCopyArray = [...originalArray];
console.log(shallowCopyArray); // [1, 2, 3]
// Shallow copy of an object
const originalObject = { a: 1, b: 2 };
const shallowCopyObject = { ...originalObject };
console.log(shallowCopyObject); // { a: 1, b: 2 };
// Deep copy using JSON methods
const deepCopyObject = JSON.parse(JSON.stringify(originalObject));
console.log(deepCopyObject); // { a: 1, b: 2 };

let obj4 = { a: 1, b: { c: 2 } };
let shallowCopy = Object.assign({}, obj4);
shallowCopy.b.c = 3;
console.log(shallowCopy.b.c); // Output: 3
console.log(obj4.b.c); // Output: 3 (original nested object changed too!)
// Deep copy example
let obj5 = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(obj5));
deepCopy.b.c = 4;
console.log(deepCopy.b.c); // Output: 4
console.log(obj5.b.c); // Output: 2
//(original nested object remains unchanged)

//in used to check if prop exists in the object
const obj = { age: 'value' };
// Using the `in` operator
if ('age' in obj) {
    console.log('Property exists');
}
// Using `hasOwnProperty`
if (obj.hasOwnProperty('age')) {
    console.log('Property exists');
}

//immutable object
const immutableObject = Object.freeze({
    name: 'John',
    age: 30,
});
// Attempt to modify the object
immutableObject.name = 'Jane';
// The object remains unchanged
console.log(immutableObject); // Output: { name: 'John', age: 30 }

const obj6 = { name: 'John' };
Object.freeze(obj6);
obj6.name = 'Doe'; // This will not change the name property
console.log(obj6); // { name: 'John' }

const obj7 = { name: 'John' };
Object.seal(obj7);
obj7.name = 'Jane'; // Allowed
obj7.age = 30; // Not allowed, throws an error in strict mode
delete obj7.name; // Not allowed, throws an error in strict mode

const obj8 = { name: 'John' };
Object.preventExtensions(obj8);
obj8.name = "sapna"
console.log(obj8.name);
obj8.age = 30; // This will not work, as the object is not extensible
console.log(obj8.age); // undefined
delete obj8.name
console.log(obj8.name)

//check if an obj is empty
const isEmpty = (obj) => Object.keys(obj).length === 0;
const obj = {};
console.log(isEmpty(obj)); // true

//Asynchronous functions
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'John', age: 30 };
        callback(data); // Calling the callback function with data
    }, 2000); // Simulating a 2-second delay
}
console.log('Fetching data...');
fetchData((data) => {
    console.log(data);
    // Output: { name: 'John', age: 30 } (after 2 seconds)
});
console.log('Call made to fetch data');
// This will print before the data is fetched

//promises
let promise = new Promise((resolve, reject) => {
    // asynchronous operation
    const success = true;
    if (success) {
        resolve('Success!');
    } else {
        reject('Error!');
    }
});
promise
    .then((result) => {
        console.log(result); // 'Success!' (this will print)
    })
    .catch((error) => {
        console.error(error); // 'Error!'
    });

var globalVar = 'I am a global var';
function myFunction() {
var functionVar = 'I am a function-scoped var';
if (true) {
let blockVar = 'I am a block-scoped var';
console.log('Inside block:');
console.log(globalVar); // Accessible
console.log(functionVar); // Accessible
console.log(blockVar); // Accessible
}
console.log('Inside function:');
console.log(globalVar); // Accessible
console.log(functionVar); // Accessible
// console.log(blockVar); // Uncaught ReferenceError
}
myFunction();
console.log('In global scope:');
console.log(globalVar); // Accessible
// console.log(functionVar); // Uncaught ReferenceError
// console.log(blockVar); // Uncaught ReferenceError
