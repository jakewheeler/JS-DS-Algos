const selectionSort = (arr) => {
  const swap = (index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  };

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    let smallestItem = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < smallestItem) {
        smallestItem = arr[j];
        minIndex = j;
      }
    }
    swap(i, minIndex);
  }
  return arr;
};

let sortedList = selectionSort([5, 4, 3, 2, 1, 33, 66, 74, 32, 976, 44]);
// 1 4 3 2 5
//
console.log(sortedList);
