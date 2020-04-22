const bubbleSort = (arr) => {
  const swap = (index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(i, j);
      }
    }
  }

  return arr;
};

let sortedList = bubbleSort([7, 5, 8, 1, 2, 4, 19, 33, 55, 17, 63, 12]);
console.log(sortedList);
