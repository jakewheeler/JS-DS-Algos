const testCase1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const testCase2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const testCase3 = [2, 3, 4, 5];

const findFirstRecurringNumber = arr => {
  let map = new Map();
  let firstRecurringNum = arr
    .map(number => {
      map.set(number, map.get(number) === undefined ? 0 : map.get(number) + 1);
      if (map.get(number) > 1) return number;
    })
    .filter(val => val !== undefined)[0];

  return firstRecurringNum; // no recurring numbers
};

console.log(findFirstRecurringNumber(testCase1));
console.log(findFirstRecurringNumber(testCase2));
console.log(findFirstRecurringNumber(testCase3));
