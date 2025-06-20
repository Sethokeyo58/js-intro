
// if statement
// if (condition) {
//     // code runs if condition is true
// }

let age = 10;
if (age >= 18) {
    console.log('You are an adult.');
}

// if...else statement
age = 30;
if (age >= 18) {
    console.log('You are an adult.');
} else {
    console.log('You are not an adult.');
}

let temp = 35;
if (temp > 20) {
    console.log('It is warm outside today.');``
} else {
    console.log('It is chilly outside.');
}
// if...else if...else
let  score = 76;

if (score >= 90) {
    console.log('Grade A');
} else if (score >= 80) {
    console.log('Grade B')
} else if (score >= 70) {
    console.log('Grade C')
} else if (score >= 60) {
    console.log('Grade D')
} else {
    console.log('Grade F')
}
// switch statement
score = 80;

switch (true) {
    case (score >= 90):
        console.log('Grade A');
        break;
    case (score >= 80):
        console.log('Grade B');
        break;
    case (score >= 70):
        console.log('Grade C');
        break;
    case (score >= 60):
        console.log('Grade D');
        break;
    default:
        console.log('Grade F');
}
// Ternary Operator
// condition ? value_if_true: value_if_false
let isLoggedIn = false;
let message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(message);

let number = 10;
let result = number % 2 === 0 ? "Even" : "Odd";
console.log(result);

let username = 'admin';
let password = 'SomePass12@#';

if (username === 'admin' && password === 'SomePass12@#') {
    console.log('Access granted');
} else {
    console.log('Access denied. username or password is incorrect')
}

let total = 5000;

if (total > 500) {
    console.log('Free delivery!');
} else {
    console.log('Add more items to earn a free delivery.');
}
