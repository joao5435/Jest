export function sum (x, y) {
    return x + y
}

export function subtract (a, b){
    return a - b;
}

export function isEven(number) {
return number % 2 === 0;
}

export function divide(a,b) {
if (b === 0) {
throw new Error("Não pode ser zero");
  }

return a / b;
}