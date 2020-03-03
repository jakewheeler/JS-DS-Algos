const mergeSortedArrays = (a1, a2) => {
  if (a1 && !a2) return a1;
  if (a2 && !a1) return a2;

  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      if (a2[j] <= a1[i]) {
        a1.splice(i, 0, a2[j]);
        continue;
      }
    }
  }

  return a1;
};

const a1 = [0, 3, 4, 31];
const a2 = [4, 6, 30];

console.log(mergeSortedArrays(a1, a2));
