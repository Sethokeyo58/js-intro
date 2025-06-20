
// for (initialization; condition; increment) {
//    // code execute
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

const colors = ['red', 'yellow', 'blue', 'green', 'black'];
console.log(colors.length);

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

console.log('Even numbers')
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

console.log("Odd numbers");

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        
        console.log(i);
    }
    
}

let sum = 0;
for (let i = 1; i <= 4; i++) {
    sum += i // sum = sum + i;
}

console.log('Sum: ', sum);

let sum1 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
       sum1 += i;
    }
}
console.log(sum1)

let sum2 = 0;
for ( let i = 1; i <=100; i++) {
    if(i % 2 === 0) {
          sum2 += i
    }
       
}
console.log(sum2);
