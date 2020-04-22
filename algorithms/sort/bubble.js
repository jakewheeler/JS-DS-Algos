const bubbleSort = (arr) => {
  const swap = (index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  };

  let swapped = false;

  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    if (arr[i] > arr[j]) {
      swap(i, j);
      swapped = true;
    }

    if (j === arr.length && swapped) {
      swapped = false;
      i = -1;
    }
  }

  return arr;
};

let sortedList = bubbleSort([7, 5, 8, 1, 2, 4]);
console.log(sortedList);
