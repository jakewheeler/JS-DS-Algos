// using for loop
const reverse = str => {
  if (!str || str.length < 2 || typeof str !== 'string')
    return 'Not a valid input';

  let arr = str.split('');
  let temp = '';
  for (let i = arr.length - 1; i >= 0; i--) {
    temp += arr[i];
  }
  return temp;
};

// using built-in reverse
const reverse2 = str =>
  str
    .split('')
    .reverse()
    .join('');

// same as above but uses spread
const reverse3 = str => [...str].reverse().join('');

console.log(reverse('hello'));
console.log(reverse(''));
console.log(reverse(2));
console.log(reverse2('hello'));
console.log(reverse3('hello'));
