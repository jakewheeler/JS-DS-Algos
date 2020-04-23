const binarySearch = (arr, key) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (arr[middle] === key) {
      return middle;
    } else if (arr[middle] < key) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }
  return -1;
};

let arr = [1, 8, 20, 24, 40, 55, 60];

let index = binarySearch(arr, 55);
console.log(index);
