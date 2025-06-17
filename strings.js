let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello, World!`;


// Template literals
let fName = 'Seth';
let age = 26;
let message = `Hi, my name is ${fName} and I am ${age} years old.`;
console.log(message);

// string concatenation
let message2 = "Hi, my name is " + fName + " and I am " + age + " years old."; 
console.log(message2);

// Accessing characters
let text = 'JavaScript';
console.log(text[5]);
console.log(text.charAt(7));

console.log(text.length); // length
console.log(text.indexOf('a'));
console.log(text.lastIndexOf('a'));

let text2 = 'banana';
console.log(text2.indexOf('a'));
// console.log(text2.lastIndexOf('a'));
console.log(text2.indexOf('a', 2));
console.log(text2.indexOf('a', 4));



// Changing Case
let text3 = 'JavaScript';
console.log(text3.toUpperCase());
console.log(text3.toLowerCase());
