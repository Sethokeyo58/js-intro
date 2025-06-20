// while (condition) {
//     // code to be executed
// }

// let i = 1;

// while  (i <= 5) {
//     console.log(i);
//     i++;
// }

import promptSync from "prompt-sync";
const prompt = promptSync();

let loan = 100000;
let monthlyDeductions = 20000;
let months = 0;

while (loan > 0) {
    loan -= monthlyDeductions; // loan = loan - monthlyDeductions
    // console.log(loan);
    months++;
    
}
console.log(`It will take ${months} months.`);

let count = 0;
while (true) {
    console.log(count)
    count++
    if (count > 100) break;
}

// let password = "";
// while (password.length < 8) {
//     password = prompt("Enter a password (min 8 chars): ");
// }

// console.log("Password accepted.");

let password = "";
while (true) {
    password = prompt("Enter a strong password: ");
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    const longEnough = password.length >= 8;

    if (hasUpper && hasLower && hasDigit && hasSpecial && longEnough) {
        console.log("Password is strong!");
        break;
    } else {
        console.log("Password is weak. Try again")
    }

}