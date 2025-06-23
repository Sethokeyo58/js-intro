import promptSync from "prompt-sync";
const prompt = promptSync();

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


function validateEmail(email){
    return email.includes("@") && email.endsWith(".com");
}

const userEmail = prompt("Enter your Email:");
if (validateEmail(userEmail)){
    console.log("valid email")
}else {
    console.log("Invalid email")
}

function calculateTotal(cartItems){
    let total=0;
    for(let item of cartItems){
        total+=item.price * item.quantity;
    }
    return total;
}

const cart = [
    {name: "T-shirts", price: 1200, quantity:3},
    {name: "trousers", price: 1500, quantity:2},
];

console.log ("Total:", calculateTotal(cart))

function getWinner(player,computer){
    if (player == computer) return "Draw";
    if (
        (player == "rock" && computer =="scissors")||
        (player== "scissors" && computer =="paper")||
        (player == "paper" && computer =="rock")
    ){
        return "Player Wins!"
    }
    return "Computer Wins!"
}

console.log (getWinner("scissors", "rock"));