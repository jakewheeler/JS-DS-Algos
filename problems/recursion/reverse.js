const reverse = (str) => {
  if (str === '') {
    return str;
  }

  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
};

let rev = reverse('hello i am testing my recursive reverse function');
console.log(rev);
