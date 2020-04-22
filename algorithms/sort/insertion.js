const insertionSort = (arr) => {
  const swap = (index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  };

  // 0th index is sorted, so we start at 1
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    // never swap past first element in the list and left is still greater than the right side
    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(j - 1, j);
      j--;
    }
  }
  return arr;
};

let sorted = insertionSort([12, 15, 3, 1, 5, 2]);
console.log(sorted);
