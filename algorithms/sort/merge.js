const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  // split array
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let newList = [];

  // both arrays must have values
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      newList.push(right.shift());
    } else {
      newList.push(left.shift());
    }
  }

  /*
    newList will have all the elements it was able to sort until one
    of the lists ran out of elements. It then concats the right
    elements array to the left elements array
  */
  let r = newList.concat(left.slice().concat(right.slice()));

  //   console.log('left:', left);
  //   console.log('right:', right);
  //   console.log('newList:', newList);
  //   console.log('newList after append:', r);

  return r;
};

const sorted = mergeSort([6, 12, 9, 0, 1, 4, 5, 8]);
console.log(sorted);
