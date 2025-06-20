const prompt = require('prompt-sync')();

let again = 'yes';

while (again.toLowerCase() === 'yes') {
  let num1 = prompt('Enter the first number: ');
  let num2 = prompt('Enter the second number: ');
  const operator = prompt('Enter an operator (+, -, *, /, %, **): ');


  num1 = Number(num1);
  num2 = Number(num2);

  if (isNaN(num1) || isNaN(num2)) {
    console.log('Invalid number input. Please enter valid numbers.');
  } else {
    let result;

    switch (operator) {
      case '+':
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;
      case '-':
        result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
        break;
      case '*':
        result = num1 * num2;
        console.log(`${num1} * ${num2} = ${result}`);
        break;
      case '/':
        if (num2 === 0) {
          console.log('Result: Cannot divide by zero!');
        } else {
          result = num1 / num2;
          console.log(`${num1} / ${num2} = ${result}`);
        }
        break;
      case '%':
        result = num1 % num2;
        console.log(`${num1} % ${num2} = ${result}`);
        break;
      case '**':
        result = num1 ** num2;
        console.log(`${num1} ** ${num2} = ${result}`);
        break;
      default:
        console.log('Invalid operator! Use +, -, *, /, %, or **.');
    }
  }

  again = prompt('Do you want to calculate again? (yes/no): ');
}

