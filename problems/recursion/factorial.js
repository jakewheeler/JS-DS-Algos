const findFactorialRecursive = (number) => {
  if (number === 1) {
    return number;
  }
  return number * findFactorialRecursive(number - 1);
};

const findFactorialIterative = (number) => {
  let answer = 1;
  for (let i = 1; i <= number; i++) {
    answer *= i;
  }
  return answer;
};

let f = findFactorialRecursive(100);
let i = findFactorialIterative(100);

console.log(`Recursive: ${f}`);
console.log(`Iterative: ${i}`);
