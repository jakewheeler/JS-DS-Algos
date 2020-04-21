// given index, return number in that spot
const fibRecursive = (n) => {
  if (n < 2) return n;

  return fibRecursive(n - 1) + fibRecursive(n - 2);
};

const fibIterative = (n) => {
  let arr = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
};

let f = fibRecursive(40);
console.log(f);
let i = fibIterative(40);
console.log(i);
