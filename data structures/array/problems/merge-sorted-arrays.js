const mergeSortedArrays = (a1, a2) => {
  if (a1.length === 0) return a2;
  if (a2.length === 0) return a1;

  let merged = [];

  let a1Item = a1[0];
  let a2Item = a2[0];

  let i = 0;
  let j = 0;
  while (a1Item || a2Item) {
    if (itemCheck(a1Item, a2Item)) {
      merged.push(a1Item);
      a1Item = a1[i];
      i++;
    } else {
      merged.push(a2Item);
      a2Item = a2[j];
      j++;
    }
  }
  return merged;
};

const itemCheck = (item1, item2) => {
  return !item2 || item1 < item2;
};

const a1 = [0, 3, 4, 31];
const a2 = [4, 6, 30];

console.log(mergeSortedArrays(a1, a2));
