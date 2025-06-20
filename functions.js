function sum(num1, num2){
    return num1 + num2;
}

console.log(sum(2,3));
console.log(sum(78,3));
console.log(sum(2,67));
console.log(sum(100,78));

const product = function(a, b){
    return a* b;
}
console.log(product(5,45));
console.log(product(7,4));
console.log(product(3,4));
console.log(product(11,4));

function greeting(name){
    return`Hello ${name}!`;
}
console.log(greeting("John"));

const greet=function(name){
    return`Hello ${name}!`;
}
console.log(greet(`Jane`));

const message= (name)=>{
    return `Hi, my name is ${name}.`;
}

console.log(message(`Bob`));
console.log(message(`Seth`));

// const message= (name)=>`Hi, my name is ${name}.`;


